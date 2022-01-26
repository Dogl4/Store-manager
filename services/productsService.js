const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const create = ({ name, quantity }) => productsModel.create({ name, quantity });

const getByName = (name) => productsModel.getByName(name);

const getById = ({ id }) => productsModel.getById(id);

const update = async ({ id, name, quantity }) => {
  await productsModel.update({ id, name, quantity });
  return { id, name, quantity };
};

const deleteById = async ({ id }) => {
  const product = await productsModel.getById(id);
  await productsModel.deleteById(id);
  return product;
};

module.exports = {
  getAll,
  create,
  getByName,
  getById,
  update,
  deleteById,
 };
