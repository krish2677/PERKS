const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: false,
    },
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    // --- NEW: Add a role field for admin privileges ---
    role: {
        type: String,
        enum: ['user', 'admin'], // The role can only be 'user' or 'admin'
        default: 'user',        // All new users are 'user' by default
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);