const productsService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const products = await productsService.getAllProducts();

  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const products = await productsService.getProductById(id);
  if (!products) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const products = await productsService.createProduct(name);
  return res.status(201).json(products);
};

module.exports = { getAllProducts, getProductById, createProduct };
