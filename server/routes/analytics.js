const express = require('express');
const router = express.Router();
const { getAnalytics } = require('../controllers/analyticsController');
const { ensureAuth } = require('../middleware/auth');
const { ensureAdmin } = require('../middleware/admin');

// @desc    Get all analytics data
// @route   GET /api/analytics
router.get('/', ensureAuth, ensureAdmin, getAnalytics);

module.exports = router;