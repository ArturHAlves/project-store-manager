const express = require('express');
const { validateProductsName } = require('../middlewares');
const productsController = require('../controllers/products.controller');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAllProducts);

productsRoute.get('/:id', productsController.getProductById);

productsRoute.post('/', validateProductsName, productsController.createProduct);

productsRoute.put('/:id', validateProductsName, productsController.updateProduct);

module.exports = productsRoute;
