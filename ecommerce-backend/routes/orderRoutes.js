const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { addOrderItems, getOrderById } = require('../controllers/orderController');
const router = express.Router();

router.post('/', protect, addOrderItems);
router.get('/:id', protect, getOrderById);

module.exports = router;
