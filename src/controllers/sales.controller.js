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

const updateSale = async (req, res) => {
  const { id } = req.params;
  const saleBody = req.body;

  const sales = await Promise.all(
    saleBody.map((sale) => salesService.updateProduct(id, sale.productId, sale.quantity)),
  );

  return res.status(200).json({ saleId: +id, itemsUpdated: sales });
};

module.exports = {
  registerSales,
  getAllSales,
  getSalesById,
  deleteSale,
  updateSale,
};
