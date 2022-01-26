const router = require('express').Router();
const rescue = require('express-rescue');

const productsSevice = require('../services/productsSevice');
const validateProdutcs = require('./middlewares/validateProdutcs');

router.post('/', rescue(async (req, res) => {
  const { error } = validateProdutcs.validate(req.body);
  if (error) throw error;
  
  const names = await productsSevice.getByName(req.body.name);
  if (names.length) return res.status(409).json({ message: 'Product already exists' });

  const { name, quantity } = req.body;
  const product = await productsSevice.create({ name, quantity });
  return res.status(201).json(product);
}));

module.exports = router;