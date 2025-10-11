const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './.env' });

// Load models
const Roadmap = require('./models/Roadmap');
const Club = require('./models/Club');

// Load data
const roadmaps = require('./data/roadmaps');
const clubs = require('./data/clubs');

// Import into DB
const importData = async () => {
    try {
        // --- FIX: Wait for the connection before doing anything else ---
        await connectDB();

        // Clear existing data
        await Roadmap.deleteMany();
        await Club.deleteMany();

        // Insert new data
        await Roadmap.insertMany(roadmaps);
        await Club.insertMany(clubs);

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (err) {
        console.error('Error during data import:', err);
        process.exit(1);
    }
};

// Delete data
const deleteData = async () => {
    try {
        // --- FIX: Wait for the connection before doing anything else ---
        await connectDB();

        await Roadmap.deleteMany();
        await Club.deleteMany();
        
        console.log('Data Destroyed Successfully!');
        process.exit();
    } catch (err) {
        console.error('Error during data deletion:', err);
        process.exit(1);
    }
};

// --- Main script logic ---
if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
} else {
    console.log('Please use the -i flag to import data or -d to delete data.');
    process.exit();
}

