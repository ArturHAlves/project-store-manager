const express = require('express');
const productsRoute = require('./routes/products.route');
const salesRoute = require('./routes/sales.route');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRoute);

app.use('/sales', salesRoute);

module.exports = app;
