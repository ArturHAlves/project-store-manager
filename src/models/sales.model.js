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

const getAllSales = async () => {
  const [sales] = await connection.execute(
`SELECT
    sp.sale_id AS saleId,
    s.date,
    sp.product_id AS productId,
    sp.quantity
FROM StoreManager.sales_products AS sp
INNER JOIN StoreManager.sales AS s ON sp.sale_id = s.id
ORDER BY sp.sale_id ASC , sp.product_id ASC;`,
);
return sales;
};

const getSalesById = async (salesId) => {
  const [sales] = await connection.execute(
`SELECT
    s.date,
    sp.product_id AS productId,
    sp.quantity
FROM StoreManager.sales_products AS sp
INNER JOIN StoreManager.sales AS s ON sp.sale_id = s.id
WHERE sp.sale_id = ?
ORDER BY sp.sale_id ASC , sp.product_id ASC;`, [salesId],
);
return sales;
};

const deleteSale = async (saleId) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM sales WHERE id = ?', [saleId],
  );
  return affectedRows;
};

module.exports = { registerSales, getAllSales, getSalesById, deleteSale };
