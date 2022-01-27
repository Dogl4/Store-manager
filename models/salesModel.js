const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT sale_id as saleId, date, product_id, quantity
    FROM sales
    INNER JOIN sales_products
    ON sales.id = sale_id
    ORDER BY id;`;
  const [rows] = await connection.execute(query);
  return rows;
};

const getById = async (id) => {
  const query = `SELECT product_id, quantity, date 
    FROM sales_products AS salesPro
    JOIN sales 
    ON salesPro.sale_id = sales.id
    WHERE salesPro.sale_id = ?;`;
  const [rows] = await connection.execute(query, [id]);
  return rows;
};

const insertSales = async (...sales) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES ?;';
  await connection.query(query, sales);
};

const create = async (products) => {
  const query = 'INSERT INTO sales (id) VALUES (DEFAULT);';
  const [{ insertId: id }] = await connection.query(query);
  const orderSale = await products
    .map(({ product_id: productId, quantity }) => [id, productId, quantity]);
  await insertSales(orderSale);
  return id;
};

module.exports = {
  getAll,
  getById,
  create,
};
