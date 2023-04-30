const salesModel = require('../models/sales.model');

const registerSales = async (sale) => salesModel.registerSales(sale);

const getAllSales = async () => salesModel.getAllSales();

const getSalesById = async (saleId) => salesModel.getSalesById(saleId);

module.exports = { registerSales, getAllSales, getSalesById };
