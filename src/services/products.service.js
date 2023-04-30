const productsModel = require('../models/products.model');

const getAllProducts = async () => productsModel.getAllProducts();

const getProductById = async (Productid) => productsModel.getProductById(Productid);

const createProduct = async (product) => productsModel.createProduct(product);

module.exports = { getAllProducts, getProductById, createProduct };
