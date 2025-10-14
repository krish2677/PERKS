// server.js - COMPLETE CODE FOR HUGGING FACE INTEGRATION
console.log("--- Initializing server.js (Ready for Hugging Face Integration) ---");

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
const methodOverride = require('method-override');


// Load config - THIS MUST BE THE FIRST EXECUTABLE LINE
dotenv.config({ path: './.env' }); 

// Passport config - Ensure this runs AFTER dotenv.config()
require('./config/passport')(passport, process.env); 


// DB Connection
const connectDB = require('./config/db');
connectDB(); 


// --- REMOVED: listAvailableModels call (Specific to Gemini) ---
// This block was specific for Gemini diagnostics and is removed for Hugging Face.


const app = express();
const server = http.createServer(app);

// --- Explicit CORS configuration for Socket.io ---
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Your React app's origin
        methods: ["GET", "POST"],
        credentials: true 
    }
});

// Load models for chat (adjust casing if needed, e.g., 'user.js')
const User = require('./models/User'); 
const Conversation = require('./models/Conversation'); 

// Standard Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Method override middleware - for PUT/DELETE requests from forms
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
}));


// Standard CORS for regular API routes
app.use(cors({
    origin: 'http://localhost:3000', // Your React app's origin
    credentials: true
}));

// Session middleware
const sessionMiddleware = session({
    secret: 'keyboard cat', // !IMPORTANT: Use a strong, unique secret from process.env in production
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: {
        secure: process.env.NODE_ENV === 'production', 
        httpOnly: true, 
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
});
app.use(sessionMiddleware);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set global var (optional, good for server-side template engines if you had any)
app.use(function (req, res, next) {
    res.locals.user = req.user || null;
    next();
});

// Share session with Socket.io (important for authentication in Socket.io)
io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
});

// --- Socket.io connection logic ---
io.on('connection', (socket) => {
    const userId = socket.request.session?.passport?.user;

    if (!userId) {
        console.log(`Socket connection attempted without authentication from ${socket.id}. Disconnecting.`);
        return socket.disconnect();
    }
    
    socket.join(userId); 
    console.log(`User ${userId} connected and joined room.`);

    socket.on('sendMessage', async ({ text, recipientId }) => {
        try {
            const senderId = socket.request.session.passport.user;
            const sender = await User.findById(senderId);
            if (!sender) {
                console.error(`Socket Error: Sender user ${senderId} not found.`);
                return;
            }

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
                    io.to(adminId).emit('receiveMessage', { ...newMessage.toObject(), conversationUserId: senderId }); 
                    io.to(adminId).emit('notification', { message: `New message from ${sender.displayName}`, userId: senderId }); 
                });
            } 
            else if (sender.role === 'admin') {
                io.to(recipientId).emit('receiveMessage', newMessage); 
                io.to(senderId).emit('receiveMessage', { ...newMessage.toObject(), conversationUserId: recipientId }); 
            }
        } catch (error) {
            console.error("Socket Error: Error handling message:", error);
        }
    });

    socket.on('disconnect', () => {
        const userId = socket.request.session?.passport?.user;
        if (userId) {
            console.log(`User ${userId} disconnected.`);
        } else {
            console.log(`An unauthenticated socket disconnected.`);
        }
    });
});


// Express Routes
app.use('/', require('./routes/index')); 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/content', require('./routes/content'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/analytics', require('./routes/analytics')); 
app.use('/api/ai', require('./routes/ai')); 


const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running on port ${PORT}`));