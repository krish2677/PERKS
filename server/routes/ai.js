const express = require('express');
const router = express.Router();
const { generateProjectIdeas } = require('../controllers/aiController');
const { ensureAuth } = require('../middleware/auth');

// @desc    Generate project ideas based on technologies
// @route   POST /api/ai/generate-ideas
router.post('/generate-ideas', ensureAuth, generateProjectIdeas);

module.exports = router;