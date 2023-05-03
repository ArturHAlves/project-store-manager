const express = require('express');
const {
  validateSales,
  validateProductsId,
  validateSaleNotFound,
} = require('../middlewares');
const salesController = require('../controllers/sales.controller');

const salesRoute = express.Router();

salesRoute.post(
  '/',
  validateSales,
  validateProductsId,
  salesController.registerSales,
);

salesRoute.get('/', salesController.getAllSales);

salesRoute.get('/:id', validateSaleNotFound, salesController.getSalesById);

salesRoute.delete('/:id', validateSaleNotFound, salesController.deleteSale);

salesRoute.put(
  '/:id',
  validateSales,
  validateProductsId,
  validateSaleNotFound,
  salesController.updateSale,
);

module.exports = salesRoute;
