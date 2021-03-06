const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const create = ({ name, quantity }) => productsModel.create({ name, quantity });

const getByName = (name) => productsModel.getByName(name);

const getById = ({ id }) => productsModel.getById(id);

const update = async ({ id, name, quantity }) => {
  const newProduct = await productsModel.update({ id, name, quantity });
  return newProduct;
};

const deleteById = async ({ id }) => {
  const { name, quantity } = await productsModel.getById(id);
  await productsModel.deleteById(id);
  return { id, name, quantity };
};

module.exports = {
  getAll,
  create,
  getByName,
  getById,
  update,
  deleteById,
 };
