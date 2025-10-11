const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');
const { ensureAuth } = require('../middleware/auth');
const { ensureAdmin } = require('../middleware/admin');

// GET user's own conversation history
router.get('/history', ensureAuth, async (req, res) => {
    try {
        const conversation = await Conversation.findOne({ user: req.user.id })
            .populate('messages.sender', 'displayName role');
        res.json(conversation ? conversation.messages : []);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET all conversations (Admin only)
router.get('/all', ensureAuth, ensureAdmin, async (req, res) => {
    try {
        const conversations = await Conversation.find()
            .populate('user', 'displayName email')
            .sort({ lastUpdated: -1 });
        res.json(conversations);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;