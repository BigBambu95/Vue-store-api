const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  picture: {
    type: String
  }
});

const Category = mongoose.model('Category', categorySchema, 'Categories');

module.exports = Category;