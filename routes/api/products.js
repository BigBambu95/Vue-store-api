const express = require('express');
const router = express.Router();

const Smartphone = require('../../models/smartphone');
const Laptop = require('../../models/laptop');

const createConditions = (query) => {
  const conditions = {};

  // Получаем поля для фильтрации запроса к базе данных
  for(let key in query) {
    if(query[key] && key !== 'minPrice' && key !== 'maxPrice') {
      conditions[`options.${key}`] = query[key];
    }
  }

  return conditions;
}

router.get('/smartphones', (req, res) => {
  const { minPrice, maxPrice } = req.query;

  Smartphone
    .find(createConditions(req.query))
    .where('price').gte(Number(minPrice)).lte(Number(maxPrice))
    .then(smartphones => res.json(smartphones))
    .catch(err => res.json(err));
});

router.get('/smartphones/:id', (req, res, next) => {
  Smartphone
    .findById(req.params.id)
    .then(smartphone => res.json(smartphone))
    .catch(err => next());
});

router.get('/smartphones/:url', (req, res) => {
  Smartphone
    .find({ url: req.params.url })
    .then(smartphone => res.json(smartphone))
    .catch(err => res.status(404).json({ message: 'Смартфон по такому запросу не найден!' }));
});

router.get('/laptops', (req, res) => {
  const { minPrice, maxPrice } = req.query;
  
  Laptop
    .find(createConditions(req.query))
    .where('price').gte(Number(minPrice)).lte(Number(maxPrice))
    .then(laptops => res.json(laptops))
    .catch(err => res.json(err));
});

router.get('/laptops/:id', (req, res, next) => {
  Laptop
    .findById(req.params.id)
    .then(laptop => res.json(laptop))
    .catch(err => next());
});

router.get('/laptops/:url', (req, res) => {
  Laptop
  .find({ url: req.params.url })
  .then(laptop => res.json(laptop))
  .catch(err => res.status(404).json({ message: 'Ноутбук по такому запросу не найден!' }));
})

module.exports = router;