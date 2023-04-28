const express = require('express');
const { validateSales, validateProductsId } = require('../middlewares');
const salesController = require('../controllers/sales.controller');

const salesRoute = express.Router();

salesRoute.post('/', validateSales, validateProductsId, salesController.registerSales);

module.exports = salesRoute;
