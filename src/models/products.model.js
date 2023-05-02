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

const createProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?);',
    [name],
  );
  return { id: insertId, name };
};

const updateProduct = async (productId, name) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE products SET name = (?) WHERE id = (?);',
    [name, productId],
  );
  return affectedRows;
};

const deleteProduct = async (productId) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM products WHERE id = ?;',
    [productId],
  );
  return affectedRows;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
