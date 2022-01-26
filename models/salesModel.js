const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM sales_products');
  return rows;
};

const insertSales = async (sales) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?)';
  await connection.query(query, sales);
};

const create = async (products) => {
  const query = 'INSERT INTO sales (id) VALUES (DEFAULT)';
  const [{ insertId: id }] = await connection.execute(query);
  await insertSales(products.map(({ product_id: proId, quantity }) => [id, proId, quantity]));
  return id;
};

module.exports = {
  getAll,
  create,
};
