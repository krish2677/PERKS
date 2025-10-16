const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    tagline: String, // You might want to remove this if 'shortDescription' is preferred
    // imageUrl: String, // Removed as logoUrl is now specifically for the club logo
    mission: String,
    benefits: [String],
    
    // --- THIS IS THE CRUCIAL CHANGE FOR HIERARCHY ---
    hierarchy: [{
        role: { type: String, required: true },
        name: { type: String, required: true }
    }],
    // --------------------------------------------------
    
    achievements: [String],
    upcomingEvents: [{
        name: String,
        date: String, // Keeping date field from your previous discussions if needed
        description: String, // Keeping description field
    }],
    pastEvents: [{ // Added pastEvents based on previous EditContentPage discussions
        name: String,
        date: String, // Keeping date field
        description: String, // Keeping description field
    }],
    howToJoin: String,
    logoUrl: {
        type: String,
        default: '/uploads/default-club-logo.png' // Optional: a default logo
    },
    contactEmail: { type: String, default: '' }, // Added based on EditContentPage
    website: { type: String, default: '' },      // Added based on EditContentPage
    instagram: { type: String, default: '' },   // Added based on EditContentPage
    linkedin: { type: String, default: '' },    // Added based on EditContentPage
    otherLink: { type: String, default: '' },   // Added based on EditContentPage
});

module.exports = mongoose.models.Club || mongoose.model('Club', ClubSchema);