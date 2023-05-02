const express = require('express');
const {
  validateProductsName,
  validateProductNotFound,
} = require('../middlewares');
const productsController = require('../controllers/products.controller');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAllProducts);

productsRoute.get('/:id', validateProductNotFound, productsController.getProductById);

productsRoute.post('/', validateProductsName, productsController.createProduct);

productsRoute.put(
  '/:id',
  validateProductsName,
  validateProductNotFound,
  productsController.updateProduct,
);

productsRoute.delete('/:id', validateProductNotFound, productsController.deleteProduct);

module.exports = productsRoute;
