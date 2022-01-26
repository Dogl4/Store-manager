const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const create = ({ name, quantity }) => productsModel.create({ name, quantity });

const getByName = (name) => productsModel.getByName(name);

module.exports = {
  getAll,
  create,
  getByName,
 };