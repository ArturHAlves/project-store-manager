const salesService = require('../services/sales.service');

const registerSales = async (req, res) => {
  const salesBody = req.body;
  const sale = await salesService.registerSales(salesBody);

  return res.status(201).json(sale);
};

const getAllSales = async (_req, res) => {
  const sales = await salesService.getAllSales();

  return res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesService.getSalesById(id);

  if (sales.length === 0) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(sales);
};

module.exports = { registerSales, getAllSales, getSalesById };
