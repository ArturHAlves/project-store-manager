const connection = require('./connection');

const getAllProducts = async () => {
  const [produtcs] = await connection.execute('SELECT * FROM products;');
  return produtcs;
};

const getProductById = async (Productid) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?;',
    [Productid],
  );
  return products;
};

module.exports = { getAllProducts, getProductById };
