const express = require('express');
const router = express.Router();

const Category = require('../../models/category');

router.get('/', (req, res) => {
  Category
    .find()
    .then(categories => res.json(categories))
    .catch(err => res.json({ message: 'Не удалось получить категории!' }))
});

module.exports = router;