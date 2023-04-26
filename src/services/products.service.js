const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const getProductById = async (Productid) => {
  const products = await productsModel.getProductById(Productid);
  return products;
};

module.exports = { getAllProducts, getProductById };
