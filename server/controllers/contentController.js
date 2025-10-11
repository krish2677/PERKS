const Roadmap = require('../models/Roadmap');
const Club = require('../models/Club');
const User = require('../models/User');

// --- PUBLIC-FACING FUNCTIONS ---
const getRoadmaps = async (req, res) => {
    try {
        const roadmaps = await Roadmap.find().select('name slug description');
        res.status(200).json(roadmaps);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getClubs = async (req, res) => {
    try {
        const clubs = await Club.find().select('name slug description');
        res.status(200).json(clubs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getRoadmapBySlug = async (req, res) => {
    try {
        const user = req.user;
        if (!user || user.role !== 'admin') {
            await Roadmap.updateOne({ slug: req.params.slug }, { $inc: { viewCount: 1 } });
        }
        const roadmap = await Roadmap.findOne({ slug: req.params.slug });
        if (!roadmap) {
            return res.status(404).json({ message: 'Roadmap not found' });
        }
        res.status(200).json(roadmap);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getClubBySlug = async (req, res) => {
    try {
        const user = req.user;
        if (!user || user.role !== 'admin') {
            await Club.updateOne({ slug: req.params.slug }, { $inc: { viewCount: 1 } });
        }
        const club = await Club.findOne({ slug: req.params.slug });
        if (!club) {
            return res.status(404).json({ message: 'Club not found' });
        }
        res.status(200).json(club);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// --- ADMIN-ONLY FUNCTIONS ---
const createRoadmap = async (req, res) => {
    try {
        const newRoadmap = new Roadmap(req.body);
        const savedRoadmap = await newRoadmap.save();
        res.status(201).json(savedRoadmap);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating roadmap' });
    }
};

const createClub = async (req, res) => {
    try {
        const newClub = new Club(req.body);
        const savedClub = await newClub.save();
        res.status(201).json(savedClub);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating club' });
    }
};

const deleteRoadmap = async (req, res) => {
    try {
        await Roadmap.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Roadmap deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting roadmap' });
    }
};

const deleteClub = async (req, res) => {
    try {
        await Club.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Club deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting club' });
    }
};

const getRoadmapById = async (req, res) => {
    try {
        const roadmap = await Roadmap.findById(req.params.id);
        res.status(200).json(roadmap);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching roadmap' });
    }
};

const getClubById = async (req, res) => {
    try {
        const club = await Club.findById(req.params.id);
        res.status(200).json(club);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching club' });
    }
};

// --- THIS IS THE FIX ---
// UPDATE a roadmap using a more robust find-and-save method
const updateRoadmap = async (req, res) => {
    try {
        const roadmap = await Roadmap.findById(req.params.id);
        if (!roadmap) {
            return res.status(404).json({ message: 'Roadmap not found' });
        }
        // Overwrite the document with the new data from the request body
        Object.assign(roadmap, req.body);
        // Mark the nested 'roadmap' array as modified
        roadmap.markModified('roadmap');
        const updatedRoadmap = await roadmap.save();
        res.status(200).json(updatedRoadmap);
    } catch (err) {
        console.error("Error updating roadmap:", err);
        res.status(500).json({ message: 'Error updating roadmap' });
    }
};

// UPDATE a club using the same robust method
const updateClub = async (req, res) => {
    try {
        const club = await Club.findById(req.params.id);
        if(!club) {
            return res.status(404).json({ message: 'Club not found' });
        }
        Object.assign(club, req.body);
        // Mark nested arrays as modified to ensure they are saved
        club.markModified('benefits');
        club.markModified('hierarchy');
        club.markModified('achievements');
        club.markModified('upcomingEvents');
        const updatedClub = await club.save();
        res.status(200).json(updatedClub);
    } catch (err) {
        console.error("Error updating club:", err);
        res.status(500).json({ message: 'Error updating club' });
    }
};
// --------------------

module.exports = {
    getRoadmaps,
    getClubs,
    getRoadmapBySlug,
    getClubBySlug,
    createRoadmap,
    createClub,
    deleteRoadmap,
    deleteClub,
    getRoadmapById,
    getClubById,
    updateRoadmap,
    updateClub
};

