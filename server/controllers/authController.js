const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const LoginHistory = require('../models/LoginHistory');

// @desc    Signup new user
// @route   POST /api/auth/signup
const signup = async (req, res, next) => {
    const { username, email, password, confirmPassword, age, gender, phoneNumber } = req.body;

    if (!username || !email || !password || !confirmPassword || !age || !gender || !phoneNumber) {
        return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
    }

    try {
        let user = await User.findOne({ email: email.toLowerCase() });

        if (user) {
            return res.status(400).json({ message: 'An account with this email already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            displayName: username,
            email: email.toLowerCase(),
            password: hashedPassword,
            age: age,
            gender: gender,
            phoneNumber: phoneNumber,
            provider: 'email',
        });

        await user.save();

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.status(201).json(user);
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during signup. Please try again later.' });
    }
};


// @desc    Login with email and password
// @route   POST /api/auth/login
const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide an email and password.' });
    }

    try {
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // --- THIS IS THE UPDATED SECTION ---
        // The callback is now async to handle the database write.
        req.logIn(user, async (err) => {
            if (err) {
                return next(err);
            }

            // Record the login event in the database.
            try {
                await new LoginHistory({ user: user._id }).save();
                console.log(`Login recorded for user: ${user.displayName}`);
            } catch (logErr) {
                console.error("Failed to record login history:", logErr);
            }
            
            // Send back user data on successful login.
            return res.status(200).json(user);
        });

    } catch (err) {
        return next(err);
    }
};

// @desc    Logout user
// @route   GET /api/auth/logout
const logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.status(200).json({ message: 'Successfully logged out.' });
    });
};


// @desc    Get current user's profile
// @route   GET /api/auth/profile
const getProfile = (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
    } else {
        res.status(401).json({ message: 'Not authorized' });
    }
};

// @desc    Update user's profile
// @route   PUT /api/auth/profile
const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.body.displayName && req.body.displayName.trim() !== '') {
            user.displayName = req.body.displayName;
        }

        user.age = req.body.age ?? user.age;
        user.gender = req.body.gender ?? user.gender;
        user.phoneNumber = req.body.phoneNumber ?? user.phoneNumber;

        const updatedUser = await user.save();

        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during profile update.' });
    }
};


module.exports = {
    signup,
    login,
    logout,
    getProfile,
    updateProfile
};
