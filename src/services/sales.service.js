const salesModel = require('../models/sales.model');

const registerSales = async (sale) => {
  const sales = await salesModel.registerSales(sale);
  return sales;
};

module.exports = { registerSales };
