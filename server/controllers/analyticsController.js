const User = require('../models/User');
const Roadmap = require('../models/Roadmap');
const Club = require('../models/Club');
const LoginHistory = require('../models/LoginHistory');

// @desc    Get all analytics data
// @route   GET /api/analytics
const getAnalytics = async (req, res) => {
    try {
        // User Analytics
        const totalUsers = await User.countDocuments();
        
        // Aggregate new user sign-ups by date
        const userGrowth = await User.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // Aggregate daily active (logged-in) users by date
        const dailyActiveUsers = await LoginHistory.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$loginDate" } },
                    uniqueUsers: { $addToSet: "$user" } // Collect unique user IDs for each day
                }
            },
            {
                $project: {
                    _id: 1,
                    count: { $size: "$uniqueUsers" } // Count the number of unique users
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // Content Analytics
        const roadmapPopularity = await Roadmap.find().sort({ viewCount: -1 }).limit(10).select('name viewCount');
        const clubPopularity = await Club.find().sort({ viewCount: -1 }).limit(10).select('name viewCount');
        
        // Send all aggregated data in the response
        res.status(200).json({
            totalUsers,
            userGrowth,
            dailyActiveUsers,
            roadmapPopularity,
            clubPopularity,
        });

    } catch (err) {
        console.error("Error fetching analytics:", err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getAnalytics };
