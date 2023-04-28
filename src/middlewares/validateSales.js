const validateSales = (req, res, next) => {
  const productSales = req.body;

  if (productSales.some((sale) => !sale.productId)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (productSales.some((sale) => sale.quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (productSales.some((sale) => sale.quantity < 1)) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

module.exports = validateSales;
