const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const create = ({ name, quantity }) => productsModel.create({ name, quantity });

const getByName = (name) => productsModel.getByName(name);

const getById = ({ id }) => productsModel.getById(id);

const update = async ({ id, name, quantity }) => {
  await productsModel.update({ id, name, quantity });
  return { id, name, quantity };
};

module.exports = {
  getAll,
  create,
  getByName,
  getById,
  update,
 };
