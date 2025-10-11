const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');
const { ensureAdmin } = require('../middleware/admin');
const {
    getRoadmaps,
    getClubs,
    createRoadmap,
    createClub,
    deleteRoadmap,
    deleteClub,
    getRoadmapById,
    getClubById,
    updateRoadmap,
    updateClub,
    getRoadmapBySlug,
    getClubBySlug
} = require('../controllers/contentController');

// --- PUBLIC ROUTES (for displaying content to all users) ---
router.get('/roadmaps', getRoadmaps);
router.get('/clubs', getClubs);
router.get('/roadmaps/slug/:slug', getRoadmapBySlug);
router.get('/clubs/slug/:slug', getClubBySlug);

// --- ADMIN-ONLY ROUTES ---
// All routes below require the user to be logged in and have an 'admin' role.

// CREATE new content
router.post('/roadmaps', ensureAuth, ensureAdmin, createRoadmap);
router.post('/clubs', ensureAuth, ensureAdmin, createClub);

// DELETE content by ID
router.delete('/roadmaps/:id', ensureAuth, ensureAdmin, deleteRoadmap);
router.delete('/clubs/:id', ensureAuth, ensureAdmin, deleteClub);

// GET a single item by ID for the editing page (fetches full details)
router.get('/roadmaps/:id', ensureAuth, ensureAdmin, getRoadmapById);
router.get('/clubs/:id', ensureAuth, ensureAdmin, getClubById);

// UPDATE a single item by ID (saves changes from the editing page)
router.put('/roadmaps/:id', ensureAuth, ensureAdmin, updateRoadmap);
router.put('/clubs/:id', ensureAuth, ensureAdmin, updateClub);

module.exports = router;

