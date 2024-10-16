const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
  const { user, products, totalAmount } = req.body;
  const order = new Order({ user, products, totalAmount });
  try {
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
