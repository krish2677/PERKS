const express = require('express');
const passport = require('passport');
const router = express.Router();
const LoginHistory = require('../models/LoginHistory'); // Import the LoginHistory model

const { 
    signup, 
    login, 
    logout, 
    getProfile, 
    updateProfile 
} = require('../controllers/authController');

const { ensureAuth } = require('../middleware/auth');

// @desc    Auth with Google
// @route   GET /api/auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @desc    Google auth callback
// @route   GET /api/auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
    // This function now handles recording the login after successful authentication
    async (req, res) => {
        try {
            // Check if a user is attached to the request by Passport
            if (req.user) {
                // Create and save a new login record
                await new LoginHistory({ user: req.user._id }).save();
                console.log(`Google login recorded for user: ${req.user.displayName}`);
            }
        } catch (logErr) {
            console.error("Failed to record Google login history:", logErr);
        }
        // Redirect the user to the main dashboard
        res.redirect('http://localhost:3000/roadmap');
    }
);

// @desc    Register a new user
// @route   POST /api/auth/signup
router.post('/signup', signup);

// @desc    Login with Email/Password
// @route   POST /api/auth/login
router.post('/login', login);

// @desc    Get current user profile
// @route   GET /api/auth/profile
router.get('/profile', ensureAuth, getProfile);

// @desc    Update user profile
// @route   PUT /api/auth/profile
router.put('/profile', ensureAuth, updateProfile);

// @desc    Logout user
// @route   GET /api/auth/logout
router.get('/logout', logout);

module.exports = router;
