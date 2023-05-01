const productsModel = require('../models/products.model');

const getAllProducts = async () => productsModel.getAllProducts();

const getProductById = async (Productid) => productsModel.getProductById(Productid);

const createProduct = async (product) => productsModel.createProduct(product);

const updateProduct = async (id, name) => {
  await productsModel.updateProduct(id, name);

  return { id, name };
};

module.exports = {
  getAllProducts, getProductById, createProduct, updateProduct,
};
