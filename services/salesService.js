const salesModel = require('../models/salesModel');

const create = async (sales) => {
  const id = await salesModel.create(sales);
  return { id, itemsSold: sales };
};

module.exports = {
  create,
};
