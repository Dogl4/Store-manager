require('dotenv').config();
const app = require('express')();

const productsController = require('./controllers/productsController');
const joiError = require('./controllers/middlewares/joi.error');

app.use(require('body-parser').json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsController);

app.use(joiError);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`);
});
