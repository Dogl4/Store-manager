// const { expect } = require('chai');
// const Sinon = require('sinon');
// const connection = require('../../models/connection');
// const productsModel = require('../../models/productsModel');
// const salesModel = require('../../models/salesModel');

// describe('Camada models de produtos:', () => {
//   const mockInputProduct1 = { id: 1, name: 'Pc Gamer', quantity: 10 };
//   const mockInputProduct2 = { id: 2, name: 'Motocicleta', quantity: 20 };
//   const mockInserId = { insertId: 1 };

//   describe('1. Função getAll:', () => {
//     before(function() {
//       Sinon.stub(connection, 'execute').resolves([[mockInputProduct1]]);
//     });
//     after(function() {
//       connection.execute.restore();
//     });
//     it('1.1 A função `getAll()`, retorna um array?', async function() {
//       const result = await productsModel.getAll();
//       expect(result).to.be.an('array');
//     });
//     it('1.2 Todos os itens do array são do tipo objeto?', async function() {
//       const result = await productsModel.getAll();
//       result.map((item) => {
//         expect(item).to.be.an('object');
//       });
//     });
//     it('1.3 Todos os objetos têm estas chaves: `id`, `name` e `quantity`?', async function() {
//       const result = await productsModel.getAll();
//       result.map((item) => {
//         expect(item).to.include.all.keys('id', 'name', 'quantity');
//       });
//     });
//   });

//   describe('2. Função getByName:', () => {
//     describe('2.1 Banco com dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([[mockInputProduct1.name]]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('2.1.1 O retorno é do tipo `string`?', async () => {
//         const result = await productsModel.getByName(mockInputProduct1.name);
//         expect(result).to.be.an('String');
//       });
//       it('2.1.2 Retorna o nome se existir?', async () => {
//         const result = await productsModel.getByName(mockInputProduct1.name);
//         expect(result).to.be.equal(mockInputProduct1.name);
//       });
//     });
//     describe('2.2 Banco sem dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([[]]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('2.2.1 Retorna `undefined`?', async () => {
//         const result = await productsModel.getByName(mockInputProduct1.name);
//         expect(result).to.be.undefined;
//       });
//     });
//   });

//   describe('3. Função create:', () => {
//     before(function() {
//       Sinon.stub(connection, 'execute').resolves([mockInserId]);
//     });
//     after(function() {
//       connection.execute.restore();
//     });
//     it('3.1 Retorna um objecto com as chaves: `id`, `name` e `quantity` ?', async function() {
//       const result = await productsModel.create({ name: 'VideoGame', quantity: 10 });
//       expect(result).to.include.all.keys('id', 'name', 'quantity');
//     });
//     it('3.2 Os dados recebido é um objeto com as chaves: `name` e `quantity`, com valores do tipo string e number?', async function() {
//       const objeto = { quantity: 10, name: 'bbb' };
//       const result = await productsModel.create(objeto);
//       expect(result).to.be.an('object');
//       expect(result.name).to.be.an('String');
//       expect(result.quantity).to.be.an('Number');
//     });
//   });

//   describe('4. Função getById:', () => {
//     describe('4.1 Banco com dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([[mockInputProduct1]]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('4.1.1 O retorno é do tipo `objeto`?', async () => {
//         const result = await productsModel.getById(mockInputProduct1.id);
//         expect(result).to.be.an('object');
//       });
//     });
//     describe('4.2 Banco sem dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([[]]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('4.2.1 Retorna `undefined`?', async () => {
//         const result = await productsModel.getById(mockInputProduct1.id);
//         expect(result).to.be.undefined;
//       });
//     });
//   });

//   describe('5. Função update:', () => {
//     before(function() {
//       Sinon.stub(connection, 'execute').resolves([[mockInputProduct1]]);
//     });
//     after(function() {
//       connection.execute.restore();
//     });
//     it('5.1 Retonar o objeto alterado e com as chaves: `id`, `name` e `quantity`?', async function() {
//       const result = await productsModel.update(mockInputProduct2);
//       expect(result).to.include.all.keys('id', 'name', 'quantity');
//     });
//   });

//   describe('6. Função delete:', () => {
//     before(function() {
//       Sinon.stub(connection, 'execute').resolves([[mockInputProduct1]]);
//     });
//     after(function() {
//       connection.execute.restore();
//     });
//     it('6.1 Retonar o um objeto com o `id` do produto deletado?', async function() {
//       const result = await productsModel.deleteById(mockInputProduct1.id);
//       expect(result).to.be.a('object');
//       expect(result).to.include.all.keys('id');
//     });
//   });
// });

// describe('Camada models de sales:', () => {
//   const mockSale1 = [{ saleId: 1, product_id: 1, date: '2022-01-28 19:29:22', quantity: 10 }];
//   const mockSaleProduct1 = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 20 }];
//   const mockId = { insertId: 1 };
//   const mockSalesBD = [{ id: 1, date: '2022-01-28 19:29:22' }];

//   describe('1. Função getAll:', () => {
//     before(function() {
//       Sinon.stub(connection, 'execute').resolves([mockSale1]);
//     });
//     after(function() {
//       connection.execute.restore();
//     });
//     it('1.1 A função `getAll()`, retorna um array ? // []', async function() {
//       const result = await salesModel.getAll();
//       expect(result).to.be.an('array');
//       expect(result).to.be.an('array');
//     });
//     it('1.2 Todos os itens do 2° array são do tipo objeto? // [{}, {}]', async function() {
//       const result = await salesModel.getAll();
//       result.map((item) => {
//         expect(item).to.be.an('object');
//       });
//     });
//     it('1.3 Todos os objetos têm estas chaves: `saleId`, `date`, `product_id` e `quantity`?', async function() {
//       const result = await salesModel.getAll();
//       result.map((item) => {
//         expect(item).to.include.all.keys('saleId', 'date', 'product_id', 'quantity');
//       });
//     });
//   });

//   describe('2. Função getById:', () => {
//     describe('2.1 Banco com dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([mockSale1]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('2.1.1 O retorno é do tipo array que tem um objeto dentro?', async () => {
//         const result = await salesModel.getById(mockSale1.product_id);
//         expect(result).to.be.an('array');
//         result.map((item) => {
//           expect(item).to.be.an('object');
//         });
//       });
//       it('2.1.2 No objeto retornado estas são as chaves: `product_id`, `quantity` e `date`?', async () => {
//         const result = await salesModel.getAll();
//         result.map((item) => {
//           expect(item).to.include.all.keys('product_id', 'quantity', 'date');
//         });
//       });
//     });
//     describe('2.2 Banco sem dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('2.2.1 Retorna undefined?', async () => {
//         const result = await salesModel.getById(1);
//         expect(result).to.be.undefined;
//       });
//     });
//   });

//   describe('3. Função create:', () => {
//     before(function() {
//       Sinon.stub(connection, 'query').resolves([mockId]);
//     });
//     after(function() {
//       connection.query.restore();
//     });
//     it('3.1 Recebe um array com objetos e retorna um Number, o id da venda?', async function() {
//       const result = await salesModel.create(mockSaleProduct1);
//       expect(result).to.be.a('number');
//     });
//   });

//   describe('4. Função getByIdSale:', () => {
//     describe('4.1 Banco com dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([mockSalesBD]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('4.1.1 O retorno é um array com objeto?', async () => {
//         const result = await salesModel.getByIdSale(mockSale1[0].id);
//         result.map((item) => {
//           expect(item).to.be.an('object');
//         });
//       });
//       it('4.1.2 O objeto retornados em as chaves `id` e `date`?', async () => {
//         const [result] = await salesModel.getByIdSale(mockSale1[0].id);
//         expect(result).to.include.all.keys('id', 'date');
//       });
//     });
//     describe('4.2 Banco sem dados:', function() {
//       before(() => {
//         Sinon.stub(connection, 'execute').resolves([]);
//       });
//       after(() => {
//         connection.execute.restore();
//       });
//       it('4.2.1 Retorna `undefined`?', async () => {
//         const result = await salesModel.getByIdSale(mockSale1[0].id);
//         expect(result).to.be.undefined;
//       });
//     });
//   });
// });
