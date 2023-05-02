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

  return res.status(200).json(sales);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  await salesService.deleteSale(id);

  return res.status(204).end();
};

module.exports = { registerSales, getAllSales, getSalesById, deleteSale };
