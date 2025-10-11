import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './Chatbox.css';

const Chatbox = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const socketRef = useRef();
    const messagesEndRef = useRef(null);

    // Effect for handling socket connection and events
    useEffect(() => {
        if (!isOpen) {
            // Disconnect if the chat is closed and a socket exists
            if (socketRef.current) {
                console.log('Chat closed. Disconnecting socket.');
                socketRef.current.disconnect();
            }
            return;
        }

        console.log('Chatbox opened. Attempting to connect to socket server...');
        // Connect to socket.io server
        socketRef.current = io("http://localhost:5000", { withCredentials: true });

        // --- DIAGNOSTIC LOGS for connection ---
        socketRef.current.on('connect', () => {
            console.log('Socket Connected Successfully! Socket ID:', socketRef.current.id);
        });

        socketRef.current.on('connect_error', (err) => {
            console.error('Socket Connection Error:', err.message);
        });

        // Fetch chat history
        const fetchHistory = async () => {
            try {
                console.log('Fetching chat history...');
                const response = await fetch('/api/chat/history', { credentials: 'include' });
                if (response.ok) {
                    const history = await response.json();
                    setMessages(history);
                    console.log('Successfully fetched chat history:', history);
                } else {
                    console.error('Failed to fetch chat history.');
                }
            } catch (error) {
                console.error("Error fetching chat history:", error);
            }
        };
        fetchHistory();

        // Listen for incoming messages
        socketRef.current.on('receiveMessage', (message) => {
            console.log('Received a new message from server:', message);
            setMessages(prevMessages => [...prevMessages, message]);
        });

        // Disconnect on component unmount
        return () => {
            console.log('Chatbox unmounting. Disconnecting socket.');
            socketRef.current.disconnect();
        };
    }, [isOpen]);

    // Effect to scroll to the latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() && socketRef.current) {
            console.log(`Attempting to send message: "${newMessage}"`);
            socketRef.current.emit('sendMessage', { text: newMessage });
            setNewMessage(''); // Re-enabled for better UX during debugging
            console.log('"sendMessage" event emitted to server.');
        } else {
            console.warn('Could not send message. Text is empty or socket is not connected.');
        }
    };

    if (!isOpen) {
        return (
            <button className="chat-toggle-button" onClick={() => setIsOpen(true)}>
                💬 Support
            </button>
        );
    }

    return (
        <div className="chatbox-container">
            <div className="chatbox-header" onClick={() => setIsOpen(false)}>
                <h3>Support Chat</h3>
                <button className="close-btn">&times;</button>
            </div>
            <div className="chatbox-messages">
                {(messages || []).map((msg, index) => (
                    <div key={index} className={`message ${msg.sender?._id === user._id ? 'sent' : 'received'}`}>
                        <span className="sender-name">{msg.sender?.displayName || 'Admin'}</span>
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
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbox;