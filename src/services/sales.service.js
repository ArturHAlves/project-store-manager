const salesModel = require('../models/sales.model');

const registerSales = async (sale) => salesModel.registerSales(sale);

const getAllSales = async () => salesModel.getAllSales();

const getSalesById = async (saleId) => salesModel.getSalesById(saleId);

const deleteSale = async (saleId) => salesModel.deleteSale(saleId);

module.exports = { registerSales, getAllSales, getSalesById, deleteSale };
