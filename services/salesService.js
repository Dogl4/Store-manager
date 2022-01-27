const salesModel = require('../models/salesModel');

const getAll = () => salesModel.getAll();

const getById = ({ id }) => salesModel.getById(id);

const create = async (sales) => {
  const id = await salesModel.create(sales);
  return { id, itemsSold: sales };
};

module.exports = {
  getAll,
  getById,
  create,
};
