const { expect } = require('chai');
const Sinon = require('sinon');

const salesController = require('../../controllers/salesController');

describe('Camada models de sales:', () => {
  

  // describe('1. Função getAll:', () => {
  //   before(() => {
  //     Sinon.stub(connection, 'execute').resolves([mockSale1]);
  //   });
  //   after(() => {
  //     connection.execute.restore();
  //   })
  //   it('1.1 A função `getAll()`, retorna um array ? // []', async () => {
  //     const result = await salesModel.getAll();
  //     expect(result).to.be.an('array');
  //     expect(result).to.be.an('array');
  //   });
  //   it('1.2 Todos os itens do 2° array são do tipo objeto? // [{}, {}]', async () => {
  //     const result = await salesModel.getAll();
  //     result.map((item) => {
  //       expect(item).to.be.an('object');
  //     });
  //   });
  //   it('1.3 Todos os objetos têm estas chaves: `saleId`, `date`, `product_id` e `quantity`?', async () => {
  //     const result = await salesModel.getAll();
  //     result.map((item) => {
  //       expect(item).to.include.all.keys('saleId', 'date', 'product_id', 'quantity');
  //     });
  //   })
  // });

  // describe('2. Função getById:', () => {
  //   describe('2.1 Banco com dados:', () => {
  //     before(() => {
  //       Sinon.stub(connection, 'execute').resolves([mockSale1]);
  //     });
  //     after(() => {
  //       connection.execute.restore();
  //     })
  //     it('2.1.1 O retorno é do tipo array que tem um objeto dentro?', async () => {
  //       const result = await salesModel.getById(mockSale1.product_id);
  //       expect(result).to.be.an('array');
  //       result.map((item) => {
  //         expect(item).to.be.an('object');
  //       });
  //     });
  //     it('2.1.2 No objeto retornado estas são as chaves: `product_id`, `quantity` e `date`?', async () => {
  //       const result = await salesModel.getAll();
  //       result.map((item) => {
  //         expect(item).to.include.all.keys('product_id', 'quantity', 'date');
  //       });
  //     })
  //   });
  //   describe('2.2 Banco sem dados:', () => {
  //     before(() => {
  //       Sinon.stub(connection, 'execute').resolves([]);
  //     });
  //     after(() => {
  //       connection.execute.restore();
  //     });
  //     it('2.2.1 Retorna undefined?', async () => {
  //       const result = await salesModel.getById(1);
  //       expect(result).to.be.undefined;
  //     });
  //   });
  // });

  // describe('3. Função create:', () => {
  //   before(() => {
  //     Sinon.stub(connection, 'query').resolves([mockId]);
  //   });
  //   after(() => {
  //     connection.query.restore();
  //   })
  //   it('3.1 Recebe um array com objetos e retorna um Number, o id da venda?', async () => {
  //     const result = await salesModel.create(mockSaleProduct1);
  //     expect(result).to.be.a('number');
  //   });
  // });

  // describe('4. Função getByIdSale:', () => {
  //   describe('4.1 Banco com dados:', () => {
  //     before(() => {
  //       Sinon.stub(connection, 'execute').resolves([mockSalesBD]);
  //     });
  //     after(() => {
  //       connection.execute.restore();
  //     })
  //     it('4.1.1 O retorno é um array com objeto?', async () => {
  //       const result = await salesModel.getByIdSale(mockSale1[0].id);
  //       result.map((item) => {
  //         expect(item).to.be.an('object');
  //       });
  //     });
  //     it('4.1.2 O objeto retornados em as chaves `id` e `date`?', async () => {
  //       const [result] = await salesModel.getByIdSale(mockSale1[0].id);
  //       expect(result).to.include.all.keys('id', 'date');
  //     });
  //   });
  //   describe('4.2 Banco sem dados:', () => {
  //     before(() => {
  //       Sinon.stub(connection, 'execute').resolves([]);
  //     });
  //     after(() => {
  //       connection.execute.restore();
  //     });
  //     it('4.2.1 Retorna `undefined`?', async () => {
  //       const result = await salesModel.getByIdSale(mockSale1[0].id);
  //       expect(result).to.be.undefined;
  //     });
  //   });
  // });
});
