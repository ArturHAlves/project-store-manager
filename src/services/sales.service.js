const salesModel = require('../models/sales.model');

const registerSales = async (sale) => salesModel.registerSales(sale);

const getAllSales = async () => salesModel.getAllSales();

const getSalesById = async (saleId) => salesModel.getSalesById(saleId);

const deleteSale = async (saleId) => salesModel.deleteSale(saleId);

const updateProduct = async (saleId, productId, quantity) =>
  salesModel.updateSale(saleId, productId, quantity);

module.exports = { registerSales, getAllSales, getSalesById, deleteSale, updateProduct };
