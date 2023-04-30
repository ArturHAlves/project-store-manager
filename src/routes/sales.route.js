const express = require('express');
const { validateSales, validateProductsId } = require('../middlewares');
const salesController = require('../controllers/sales.controller');

const salesRoute = express.Router();

salesRoute.post('/', validateSales, validateProductsId, salesController.registerSales);

salesRoute.get('/', salesController.getAllSales);

salesRoute.get('/:id', salesController.getSalesById);

module.exports = salesRoute;
