const salesModel = require('../models/salesModel');

const getAll = () => salesModel.getAll();

const getById = ({ id }) => salesModel.getById(id);

const create = async (sales) => {
  const id = await salesModel.create(sales);
  return { id, itemsSold: sales };
};

const updateQuantity = async ({ id, newSales }) => {
  const arr = newSales.map((e) => [e.quantity, id, e.product_id]);

  const isSale = await salesModel.getByIdSale(id);
  if (!isSale.length) return;

  await salesModel.updateDate(id);
  await salesModel.updateQuantity(...arr);
  return { saleId: id, itemUpdated: [...newSales] };
};

module.exports = {
  getAll,
  getById,
  create,
  updateQuantity,
};
