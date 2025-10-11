const mongoose = require('mongoose');

const LoginHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    loginDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.models.LoginHistory || mongoose.model('LoginHistory', LoginHistorySchema);