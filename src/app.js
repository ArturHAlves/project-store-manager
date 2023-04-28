const express = require('express');
const productsRoute = require('./routes/products.route');
const salesRoute = require('./routes/sales.route');

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Products
app.use('/products', productsRoute);

// Sales
app.use('/sales', salesRoute);

// não remova essa exportação, é para o avaliador funcionar//
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
