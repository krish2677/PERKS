const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    tagline: String,
    imageUrl: String,
    mission: String,
    benefits: [String],
    hierarchy: [{
        role: String,
        name: String,
    }],
    achievements: [String],
    upcomingEvents: [{
        name: String,
        date: String,
        description: String,
    }],
    howToJoin: String,
});

module.exports = mongoose.models.Club || mongoose.model('Club', ClubSchema);