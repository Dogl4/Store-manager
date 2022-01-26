const router = require('express').Router();
const rescue = require('express-rescue');

const validateSales = require('./middlewares/validateSales');

router.post('/', rescue(async (req, _res) => {
  for (let index = 0; index < req.body.length; index += 1) {
    const productId = req.body[index].product_id;
    const { error } = validateSales.validate({ productId, quantity: req.body[index].quantity });
    if (error) throw error;
  }
}));

module.exports = router;
