// server/routes/upload.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Configure storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure this path exists relative to your server.js/app.js location
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        // Generate a unique filename
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

// File filter (optional, to accept only images)
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB file size limit
});

// POST route for image upload
router.post('/upload-image', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }
    // Return the URL where the image can be accessed
    // This assumes your public folder is served statically
    res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

module.exports = router;