const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.password === password) {
    res.json(user);
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
