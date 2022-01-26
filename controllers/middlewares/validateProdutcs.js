const Joi = require('joi');
// Baseado na aula da (14C | 23.3), no PR do Kaique e na documentação do Joi(https://joi.dev/api/?v=17.5.0#assertvalue-schema-message-options)
module.exports = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.min': '"name" length must be at least 5 characters long',
  }),
  quantity: Joi.number().min(1).required().messages({
    'number.min': '"quantity" must be a number larger than or equal to 1',
    'number.base': '"quantity" must be a number larger than or equal to 1',
  }),
});
