const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUser } = require('../controllers/adminController');
const { ensureAuth } = require('../middleware/auth');
const { ensureAdmin } = require('../middleware/admin');

// @desc    Get all users
// @route   GET /api/admin/users
router.get('/users', ensureAuth, ensureAdmin, getAllUsers);

// @desc    Delete a user by ID
// @route   DELETE /api/admin/users/:id
router.delete('/users/:id', ensureAuth, ensureAdmin, deleteUser);

module.exports = router;