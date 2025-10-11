import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import './AdminSupportPage.css';

// Reusable Chatbox Component
const Chatbox = ({ messages, onSendMessage, user, isClosable, onClose }) => {
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className="chatbox-container admin-view">
            <div className="chatbox-header">
                <h3>Chat with {user?.displayName || 'User'}</h3>
                {isClosable && <button onClick={onClose} className="close-btn">&times;</button>}
            </div>
            <div className="chatbox-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender.role === 'admin' ? 'sent' : 'received'}`}>
                        <span className="sender-name">{msg.sender.displayName}</span>
                        <p>{msg.text}</p>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="chatbox-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};


const AdminSupportPage = () => {
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        // Fetch all conversations
        const fetchConversations = async () => {
            try {
                const response = await fetch('/api/chat/all', { credentials: 'include' });
                if (response.ok) {
                    setConversations(await response.json());
                }
            } catch (error) {
                console.error("Failed to fetch conversations", error);
            }
        };
        fetchConversations();

        // Connect to socket.io
        socketRef.current = io("http://localhost:5000", { withCredentials: true });

        socketRef.current.on('receiveMessage', (newMessage) => {
            // Update messages if the conversation is selected
            if (selectedConversation && newMessage.conversationUserId === selectedConversation.user._id) {
                setMessages(prev => [...prev, newMessage]);
            }
        });

        return () => socketRef.current.disconnect();
    }, [selectedConversation]);
    
    const handleSelectConversation = (convo) => {
        setSelectedConversation(convo);
        setMessages(convo.messages);
    };

    const handleSendMessage = (text) => {
        const recipientId = selectedConversation.user._id;
        socketRef.current.emit('sendMessage', { text, recipientId });
    };

    return (
        <div className="admin-support-container">
            <Link to="/admin" className="back-link">← Back to Admin Panel</Link>
            <h1>Support Chat Dashboard</h1>
            <div className="support-layout">
                <div className="conversations-list">
                    <h3>Active Conversations</h3>
                    {conversations.map(convo => (
                        <div 
                            key={convo._id} 
                            className={`convo-item ${selectedConversation?._id === convo._id ? 'active' : ''}`}
                            onClick={() => handleSelectConversation(convo)}
                        >
                            <p className="convo-user">{convo.user.displayName}</p>
                            <p className="convo-last-message">
                                {convo.messages[convo.messages.length - 1]?.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="chat-area">
                    {selectedConversation ? (
                        <Chatbox 
                            messages={messages}
                            onSendMessage={handleSendMessage}
                            user={selectedConversation.user}
                        />
                    ) : (
                        <div className="no-chat-selected">
                            <p>Select a conversation to start chatting.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminSupportPage;