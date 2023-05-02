const productsService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const products = await productsService.getAllProducts();

  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const products = await productsService.getProductById(id);

  return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const products = await productsService.createProduct(name);

  return res.status(201).json(products);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = await productsService.updateProduct(+id, name);

  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await productsService.deleteProduct(id);

  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
