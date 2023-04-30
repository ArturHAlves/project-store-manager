const productsModel = require('../models/products.model');

const validateProductId = async (req, res, next) => {
  const productsBody = req.body;
  const products = productsBody.map((product) => product.productId);

  const allProducts = (await productsModel.getAllProducts()).map(({ id }) => id);
    // allProducts verifica se cada valor dentro do array products está presente no array allProducts
  const hasProducts = products.every((product) => allProducts.includes(product));

  if (!hasProducts) return res.status(404).json({ message: 'Product not found' });

  return next();
};

module.exports = validateProductId;
