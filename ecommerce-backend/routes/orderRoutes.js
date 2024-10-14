const express = require('express');
const router = express.Router();

// Example: Fake data for orders (replace with database logic)
let orders = [
  { id: 1, product: 'Laptop', quantity: 1, price: 1200 },
  { id: 2, product: 'Phone', quantity: 2, price: 600 },
];

// @desc    Create a new order
// @route   POST /api/orders
router.post('/', (req, res) => {
  const { product, quantity, price } = req.body;

  if (!product || !quantity || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newOrder = {
    id: orders.length + 1,
    product,
    quantity,
    price,
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// @desc    Get all orders
// @route   GET /api/orders
router.get('/', (req, res) => {
  res.json(orders);
});

// @desc    Get an order by ID
// @route   GET /api/orders/:id
router.get('/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find((o) => o.id === orderId);

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// @desc    Delete an order
// @route   DELETE /api/orders/:id
router.delete('/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex((o) => o.id === orderId);

  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
    res.json({ message: `Order ${orderId} deleted` });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

module.exports = router;
