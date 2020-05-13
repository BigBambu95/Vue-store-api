const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const products = require('./routes/api/products');
const categories = require('./routes/api/categories');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

const dbUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ssc1v.mongodb.net/VueStore?retryWrites=true&w=majority`;

const dbOptions = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}

mongoose
  .connect(dbUri, dbOptions)
  .then(() => console.log('База данных успешно подключена!'))
  .catch(err => console.error(err));


app.use(cors());

app.use('/api/products', products);
app.use('/api/categories', categories);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log('Сервер запущен по адресу http://localhost:' + PORT);
});