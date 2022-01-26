const router = require('express').Router();
const rescue = require('express-rescue');

const productsService = require('../services/productsService');
const validateProdutcs = require('./middlewares/validateProdutcs');

router.post('/', rescue(async (req, res) => {
  const { error } = validateProdutcs.validate(req.body);
  if (error) throw error;
  
  const names = await productsService.getByName(req.body.name);
  if (names) return res.status(409).json({ message: 'Product already exists' });

  const { name, quantity } = req.body;
  const product = await productsService.create({ name, quantity });
  return res.status(201).json(product);
}));

router.get('/', rescue(async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
}));

router.get('/:id', rescue(async (_req, res) => {
  const { id } = _req.params;
  const product = await productsService.getById({ id: +id });
  if (product) return res.status(200).json(product);

  return res.status(404).json({ message: 'Product not found' });
}));

router.put('/:id', rescue(async (req, res) => {
  const { error } = validateProdutcs.validate(req.body);
  if (error) throw error;

  const product = await productsService.getByName(req.body.name);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const { body: { name, quantity }, params: { id } } = req;
  const newProduct = await productsService.update({ id: +id, name, quantity });
  return res.status(200).send(newProduct);
}));

router.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById({ id: +id });
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = await productsService.deleteById({ id: +id });
  return res.status(200).json(deletedProduct);
}));

module.exports = router;
