const salesService = require('../services/sales.service');

const saleNotFound = async (req, res, next) => {
  const { id } = req.params;

  const hasSales = await salesService.getSalesById(id);
  if (hasSales.length === 0) return res.status(404).json({ message: 'Sale not found' });

  return next();
};

module.exports = saleNotFound;
