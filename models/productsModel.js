const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM products;');
  return rows;
};

const getByName = async (name) => {
  const [[rows]] = await connection.execute('SELECT * FROM products WHERE name = ?;', [name]);
  return rows;
};

const create = async ({ name, quantity }) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?);';
  const [{ insertId: id }] = await connection.execute(query, [name, quantity]);
  return { id, name, quantity };
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?;';
  const [[rows]] = await connection.execute(query, [id]);
  return rows;
};

const update = async ({ id, name, quantity }) => {
  const query = 'UPDATE products SET name = ?, quantity = ? WHERE id = ?;';
  await connection.execute(query, [name, quantity, id]);
  return { id, name, quantity };
};

const deleteById = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?;';
  await connection.execute(query, [id]);
  return { id };
};

module.exports = {
  getAll,
  getByName,
  create,
  getById,
  update,
  deleteById,
};
