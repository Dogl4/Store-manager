const Joi = require('joi');

module.exports = Joi.object({
  productId: Joi.number().min(1).required().messages({
    'string.min': '"product_id" length must be at least 5 characters long',
    'any.required': '"product_id" is required',
  }),
  quantity: Joi.number().min(1).required().messages({
    'number.min': '"quantity" must be a number larger than or equal to 1',
    'number.base': '"quantity" must be a number larger than or equal to 1',
  }),
});
