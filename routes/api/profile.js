const express = require('express');
const router = express.Router();

//Make the api/... whatever you want 

// @Route   GET api/profile/
// @desc    Get current users profile
// @access  Public
router.get('/', (req, res) => {
    res.send('profile api')
});


module.exports = router;