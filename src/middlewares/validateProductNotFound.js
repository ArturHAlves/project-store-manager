const productsService = require('../services/products.service');

const productNotFound = async (req, res, next) => {
  const { id } = req.params;

  const hasProduct = await productsService.getProductById(id);
  if (!hasProduct) return res.status(404).json({ message: 'Product not found' });

  return next();
};

module.exports = productNotFound;
