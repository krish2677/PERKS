const mongoose = require('mongoose');

// Define sub-schemas for nested data
const SubjectSchema = new mongoose.Schema({
    name: String,
    keyConcepts: [String],
    notes: String,
});

const SemesterSchema = new mongoose.Schema({
    semester: String,
    subjects: [SubjectSchema],
});

// --- NEW: More specific schemas for guidance ---
const ElectiveOptionSchema = new mongoose.Schema({
    name: String,
    reason: String,
});

const ElectivesGuidanceSchema = new mongoose.Schema({
    title: String,
    description: String,
    options: [ElectiveOptionSchema],
    dlocOptions: [ElectiveOptionSchema],
    honoursOptions: [ElectiveOptionSchema],
});

const InternshipGuidanceSchema = new mongoose.Schema({
    whenToStart: String,
    howToApply: String,
    typesOfRoles: [{
        name: String,
        description: String,
    }],
});
// ---

const YearSchema = new mongoose.Schema({
    year: String,
    semesters: [SemesterSchema],
    skillGuidance: String,
    courses: [{
        platform: String,
        title: String,
        description: String,
        link: String,
    }],
    electivesGuidance: ElectivesGuidanceSchema, // Use the new sub-schema
});

const RoadmapSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    roadmap: [YearSchema],
    internshipGuidance: InternshipGuidanceSchema, // Use the new sub-schema
    viewCount: { 
        type: Number, 
        default: 0 
    }
});

module.exports = mongoose.models.Roadmap || mongoose.model('Roadmap', RoadmapSchema);

