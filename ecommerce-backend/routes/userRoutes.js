const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authUser, registerUser, getUserProfile } = require('../controllers/userController');
const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
