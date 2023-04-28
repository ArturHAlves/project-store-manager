const salesService = require('../services/sales.service');

const registerSales = async (req, res) => {
  const salesBody = req.body;
  const sale = await salesService.registerSales(salesBody);

  return res.status(201).json(sale);
};

module.exports = { registerSales };
