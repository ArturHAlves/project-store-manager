const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductById = async (Productid) => {
  const products = await productsModel.getProductById(Productid);
  return products;
};

const createProduct = async (product) => {
  const products = await productsModel.createProduct(product);
  return products;
};

module.exports = { getAllProducts, getProductById, createProduct };
