// --- CONFIRMATION LOG: You should see this message in your terminal on startup ---
console.log("--- Initializing server.js (Version with FINAL Socket.io CORS fix) ---");

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

// Load config
dotenv.config({ path: './.env' });
require('./config/passport')(passport);
const connectDB = require('./config/db');
connectDB();

const app = express();
const server = http.createServer(app);

// --- THE FIX: Explicit CORS configuration for Socket.io ---
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Your React app's origin
        methods: ["GET", "POST"],
        credentials: true // This is essential for sessions/cookies
    }
});

// Load models for chat
const User = require('./models/User');
const Conversation = require('./models/Conversation');

// Standard Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Standard CORS for regular API routes
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));

// Session middleware
const sessionMiddleware = session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
});
app.use(sessionMiddleware);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Share session with Socket.io
io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
});

// --- Socket.io connection logic ---
io.on('connection', (socket) => {
    const userId = socket.request.session.passport?.user;

    if (!userId) {
        console.log('Socket connection rejected: User not authenticated.');
        return socket.disconnect();
    }
    
    socket.join(userId);
    console.log(`User ${userId} connected and joined room.`);

    socket.on('sendMessage', async ({ text, recipientId }) => {
        try {
            const senderId = socket.request.session.passport.user;
            const sender = await User.findById(senderId);
            if (!sender) return;

            const message = { sender: senderId, text };
            const conversationUserId = sender.role === 'admin' ? recipientId : senderId;

            const conversation = await Conversation.findOneAndUpdate(
                { user: conversationUserId },
                { $push: { messages: message }, $set: { lastUpdated: Date.now() } },
                { upsert: true, new: true }
            ).populate('messages.sender', 'displayName role');
            
            const newMessage = conversation.messages[conversation.messages.length - 1];

            if (sender.role === 'user') {
                io.to(senderId).emit('receiveMessage', newMessage);
                const admins = await User.find({ role: 'admin' });
                admins.forEach(admin => {
                    const adminId = admin._id.toString();
                    io.to(adminId).emit('receiveMessage', { ...newMessage.toObject(), conversationUserId });
                    io.to(adminId).emit('notification', { message: `New message from ${sender.displayName}`, userId: senderId });
                });
            } 
            else if (sender.role === 'admin') {
                io.to(recipientId).emit('receiveMessage', newMessage);
                io.to(senderId).emit('receiveMessage', { ...newMessage.toObject(), conversationUserId });
            }
        } catch (error) {
            console.error("Error handling message:", error);
        }
    });

    socket.on('disconnect', () => {
        console.log(`User ${userId} disconnected.`);
    });
});


// Express Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/content', require('./routes/content'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/analytics', require('./routes/analytics'));

const PORT = process.env.PORT || 5000;

// Use the http server (with socket.io attached) to listen for connections
server.listen(PORT, console.log(`Server running on port ${PORT}`));

