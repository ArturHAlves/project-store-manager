const connection = require('./connection');

const registerSales = async (sale) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW());',
  );

  const addSale = sale.map(({ productId, quantity }) => connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
      [insertId, productId, quantity],
  ));

  await Promise.all(addSale);

  return { id: insertId, itemsSold: sale };
};

module.exports = { registerSales };
