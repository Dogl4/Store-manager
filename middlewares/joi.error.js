// FONTE: Função baseada no que foi visto no Course e no PR do Kaique
// https://medium.com/@itskumarkrishna/custom-error-message-using-joi-b9a713b23b8f
const statusByErrorCode = {
  notFound: 404,
  alreadyExists: 409,
  'string.min': 422,
  'any.required': 400,
  'number.min': 422,
  'number.base': 422,
};

module.exports = (error, _req, res, next) => {
  if (error.isJoi) {
    const status = statusByErrorCode[error.details[0].type];
    return res.status(status).json({ message: error.details[0].message });
  }

  const status = statusByErrorCode[error.code] || 500;

  if (!statusByErrorCode[error.code]) return next(error);

  return res.status(status).json({ message: error.details[0].message });
};
