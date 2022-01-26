const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM products');
  return rows;
};

const getByName = async (name) => {
  const [rows] = await connection.execute('SELECT * FROM products WHERE name = ?', [name]);
  return rows;
};

const create = async ({ name, quantity }) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';
  const [rows] = await connection.execute(query, [name, quantity]);
  return { id: rows.insertId, name, quantity };
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [[rows]] = await connection.execute(query, [id]);
  return rows;
};

module.exports = {
  getAll,
  getByName,
  create,
  getById,
};
