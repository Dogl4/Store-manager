require('dotenv').config();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`);
});
