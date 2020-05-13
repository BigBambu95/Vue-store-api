const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  brand: {
    type: String,
    required: true
  },
  os: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  coreCount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

const Laptop = mongoose.model('Laptop', productSchema, 'Laptops');

module.exports = Laptop;