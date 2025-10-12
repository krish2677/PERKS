const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: { type: String, required: false },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    age: { type: Number, required: false },
    gender: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    
    // --- NEW: Fields for personalization ---
    interests: {
        type: [String],
        default: []
    },
    programmingLanguages: {
        type: [String],
        default: []
    },
    careerGoals: {
        type: [String],
        default: []
    },
    
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);