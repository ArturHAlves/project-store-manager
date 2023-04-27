const express = require('express');
const productsController = require('../controllers/products.controller');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAllProducts);

productsRoute.get('/:id', productsController.getProductById);

module.exports = productsRoute;