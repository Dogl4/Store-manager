const router = require('express').Router();
const rescue = require('express-rescue');

const salesService = require('../services/salesService');
const validateSales = require('./middlewares/validateSales');

router.post('/', rescue(async (req, res) => {
  for (let index = 0; index < req.body.length; index += 1) {
    const productId = req.body[index].product_id;
    const { error } = validateSales.post
      .validate({ productId, quantity: req.body[index].quantity });
    if (error) throw error;
  }

  const sales = await salesService.create(req.body);
  return res.status(201).json(sales);
}));

router.get('/', rescue(async (_req, res) => {
  const sales = await salesService.getAll();

  if (sales.length) return res.status(200).json(sales);

  return res.status(404).json({ message: 'Sale not found' });
}));

router.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById({ id: +id });

  if (sale.length) return res.status(200).json(sale);

  return res.status(404).json({ message: 'Sale not found' });
}));

router.put('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  for (let index = 0; index < req.body.length; index += 1) {
    const proId = 'product_id';
    const newReqBody = { [proId]: req.body[index].product_id, quantity: req.body[index].quantity };
    const { error } = validateSales.put.validate(newReqBody);
    if (error) throw error;
  }

  const outPutUpdate = await salesService.updateQuantity({ id: +id, newSales: req.body });
  if (outPutUpdate) return res.status(200).json(outPutUpdate);

  return res.status(404).json({ message: 'Sale not found' });
}));

module.exports = router;
