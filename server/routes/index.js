const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is running! Navigate to your frontend.');
});

router.get('/dashboard', (req, res) => {
    res.send('Welcome to the Dashboard!');
});

module.exports = router;