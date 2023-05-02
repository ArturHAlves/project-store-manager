// Validate Products
const validateProductsName = require('./validateProducts');
const validateProductNotFound = require('./validateProductNotFound');

// Validate Sales
const validateSales = require('./validateSales');
const validateProductsId = require('./validateProductsId');
const validateSaleNotFound = require('./validateSaleNotFound');

module.exports = {
  validateProductsName,
  validateSales,
  validateProductsId,
  validateProductNotFound,
  validateSaleNotFound,
};
