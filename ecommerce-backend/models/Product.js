const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String },
  category: { type: String, required: true },
  countInStock: { type: Number, required: true, default: 0 },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
