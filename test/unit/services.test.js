// const { expect } = require('chai');
// const Sinon = require('sinon');
// const productsService = require('../../services/productsService');
// const productsModel = require('../../models/productsModel');
// const salesModel = require('../../models/salesModel');
// const salesService = require('../../services/salesService');

// describe('Camada services de produtos:', function () {
//   const mockProducts1 = [{ id: 1, name: 'Pc Gamer', quantity: 10 },
//   { id: 2, name: 'Motocicleta', quantity: 20 }];
//   const mockProduct2 = { id: 1, name: 'Pc Gamer', quantity: 10 };
//   const mockProduct3 = { name: 'Pc Gamer', quantity: 10 };
//   const mockId = { id: 1 };

//   describe('1. Função getAll:', function () {
//     before(function () {
//       Sinon.stub(productsModel, 'getAll').resolves(mockProducts1);
//     });
//     after(function () {
//       productsModel.getAll.restore();
//     });
//     it('1.1 A função `getAll()`, retorna um array?', async function () {
//       const result = await productsService.getAll();
//       expect(result).to.be.an('array');
//     });
//     it('1.2 Todos os itens do array são do tipo objeto?', async function () {
//       const result = await productsService.getAll();
//       result.map((item) => {
//         expect(item).to.be.an('object');
//       });
//     });
//     it('1.3 Todos os objetos têm estas chaves: `id`, `name` e `quantity`?', async function () {
//       const result = await productsService.getAll();
//       result.map((item) => {
//         expect(item).to.include.all.keys('id', 'name', 'quantity');
//       });
//     });
//   });

//   describe('2. Função create:', function () {
//     before(function () {
//       Sinon.stub(productsModel, 'create').resolves(mockProduct2);
//     });
//     after(function () {
//       productsModel.create.restore();
//     });
//     it('2.1 Retorna um objecto com as chaves: `id`, `name` e `quantity` ?', async function () {
//       const result = await productsService.create(mockProduct3);
//       expect(result).to.include.all.keys('id', 'name', 'quantity');
//     });
//     it('2.2 Os dados recebido é um objeto com as chaves: `name` e `quantity`, com valores do tipo string e number?', async function () {
//       const result = await productsService.create(mockProduct3);
//       expect(result).to.be.an('object');
//       expect(result.name).to.be.an('String');
//       expect(result.quantity).to.be.an('Number');
//     });
//   });

//   describe('3. Função getByName:', function () {
//     describe('3.1 Com parâmetro typeof string passado:', function () {
//       before(function () {
//         Sinon.stub(productsModel, 'getByName').resolves(mockProduct2.name);
//       });
//       after(function () {
//         productsModel.getByName.restore();
//       });
//       it('3.1.1 O retorno é do tipo `string`?', async function () {
//         const result = await productsService.getByName(mockProduct2.name);
//         expect(result).to.be.an('String');
//       });
//       it('3.1.2 Retorna o nome se existir?', async function () {
//         const result = await productsService.getByName(mockProduct2.name);
//         expect(result).to.be.equal(mockProduct2.name);
//       });
//     });
//     describe('3.2 Sem parâmetro passado:', function () {
//       before(function () {
//         Sinon.stub(productsModel, 'getByName').resolves();
//       });
//       after(function () {
//         productsModel.getByName.restore();
//       });
//       it('3.2.1 Retorna `undefined`?', async function () {
//         const result = await productsService.getByName(mockProduct2.name);
//         expect(result).to.be.undefined;
//       });
//     });
//   });

//   describe('4. Função getById:', function () {
//     describe('4.1 Com parâmetro:', function () {
//       before(function () {
//         Sinon.stub(productsModel, 'getById').resolves(mockProduct2);
//       });
//       after(function () {
//         productsModel.getById.restore();
//       });
//       it('4.1.1 O retorno é um objeto?', async function () {
//         const result = await productsService.getById(mockId);
//         expect(result).to.be.an('object');
//       });
//       it('4.1.2 O objeto contém as chaves: `id`, `name` e `quantity`?', async function () {
//         const result = await productsService.getById(mockId);
//         expect(result).to.include.all.keys('id', 'name', 'quantity');
//       });
//       it('4.1.3 As chaves: `id` é do tipo number, `name` é do tipo string e `quantity` é do tipo number?', async function () {
//         const result = await productsService.getById(mockId);
//         expect(result.id).to.be.an('Number');
//         expect(result.name).to.be.an('String');
//         expect(result.quantity).to.be.an('Number');
//       });
//     });
//     describe('4.2 Sem parâmetro passado:', function () {
//       before(function () {
//         Sinon.stub(productsModel, 'getById').resolves();
//       });
//       after(function () {
//         productsModel.getById.restore();
//       });
//       it('4.2.1 Retorna `undefined`?', async function () {
//         const result = await productsService.getById(mockProduct2.id);
//         expect(result).to.be.undefined;
//       });
//     });
//   });

//   describe('5. Função update:', function () {
//     before(function () {
//       Sinon.stub(productsModel, 'update').resolves(mockProduct2);
//     });
//     after(function () {
//       productsModel.update.restore();
//     });
//     it('5.1 Retonar o objeto alterado e com as chaves: `id`, `name` e `quantity`?', async function () {
//       const result = await productsService.update(mockProduct2);
//       expect(result).to.include.all.keys('id', 'name', 'quantity');
//     });
//     it('5.2 A chave `id` é tipo number, a chave `name` é do tipo string e a chave`quantity` é do tipo number?', async function () {
//       const result = await productsService.update(mockProduct2);
//       expect(result.id).to.be.an('Number');
//       expect(result.name).to.be.an('String');
//       expect(result.quantity).to.be.an('Number');
//     });
//   });

//   describe('6. Função delete:', function () {
//     before(function () {
//       Sinon.stub(productsModel, 'getById').resolves(mockProduct2);
//       Sinon.stub(productsModel, 'deleteById').resolves(mockId.id);
//     });
//     after(function () {
//       productsModel.getById.restore();
//       productsModel.deleteById.restore();
//     });
//     it('6.1 Retonar o um objeto com as chaves: id, name e quantity?', async function () {
//       const result = await productsService.getById(mockProduct2.id);
//       await productsService.deleteById(mockProduct2.id);
//       expect(result).to.be.a('object');
//       expect(result).to.include.all.keys('id', 'name', 'quantity');
//     });
//     it('6.2 Os valores das chaves: id é um number, a name é um string e a quantity é um number?', async function () {
//       const result = await productsService.getById(mockProduct2.id);
//       productsService.deleteById(mockProduct2.id);
//       expect(result.id).to.be.an('Number');
//       expect(result.name).to.be.an('String');
//       expect(result.quantity).to.be.an('Number');
//     });
//   });
// });

// describe('Camada services de sales:', function () {
//   const mockSale = [{ saleId: 1, date: '2019-01-01 02:54:54', product_id: 1, quantity: 1 }];
//   const mockSale2 = [{ product_id: 1, quantity: 1, date: '2019-01-01 02:54:54' }];
//   mockId = { id: 1 };
//   const mockSale3 = { product_id: 1, quantity: 1 };
//   const mockSale6 = [{ id: 1, date: '2019-01-01 02:54:54' }, { id: 2, date: '2019-01-01 02:54:54' }];
//   const mockSale7 = { id: 1, newSales: [{ id: 1, date: '2019-01-01 02:54:54' }, { id: 2, date: '2019-01-01 02:54:54' }] };

//   describe('1. Função getAll:', function () {
//     before(function () {
//       Sinon.stub(salesModel, 'getAll').resolves(mockSale);
//     });
//     after(function () {
//       salesModel.getAll.restore();
//     });
//     it('1.1 A função `getAll()`, retorna um array com objetos dentro?', async function () {
//       const result = await salesService.getAll();
//       expect(result).to.be.an('array');
//       result.map((sale) => {
//         expect(sale).to.be.an('object');
//       });
//     });
//     it('1.2 As chaves dos objetos são: saleId, date, product_id, quantity?', async function () {
//       const result = await salesService.getAll();
//       result.map((item) => {
//         expect(item).to.include.all.keys('saleId', 'date', 'product_id', 'quantity');
//       });
//     });
//   });

//   describe('2. Função getById:', function () {
//     describe('2.1 Com parâmetro:', function () {
//       before(function () {
//         Sinon.stub(salesModel, 'getById').resolves(mockSale2);
//       });
//       after(function () {
//         salesModel.getById.restore();
//       });
//       it('2.1.1 O retorno é um array com objetos?', async function () {
//         const result = await salesService.getById(mockId.id);
//         expect(result).to.be.an('array');
//         result.map((sale) => {
//           expect(sale).to.be.an('object');
//         });
//       });
//       it('2.1.2 Os objetos contém as chaves: product_id, quantity, date?', async function () {
//         const result = await salesService.getById(mockId.id);
//         result.map((sale) => {
//           expect(sale).to.include.all.keys('product_id', 'quantity', 'date');
//         });
//       });
//     });
//     describe('4.2 Sem parâmetro passado:', function () {
//       before(function () {
//         Sinon.stub(salesModel, 'getById').resolves();
//       });
//       after(function () {
//         salesModel.getById.restore();
//       });
//       it('4.2.1 Retorna `undefined`?', async function () {
//         const result = await salesService.getById(mockId.id);
//         expect(result).to.be.undefined;
//       });
//     });
//   });

//   describe('3. Função create:', function () {
//     before(function () {
//       Sinon.stub(salesModel, 'create').resolves(mockId.id);
//     });
//     after(function () {
//       salesModel.create.restore();
//     });
//     it('3.1 Retorna um objeto com as chaves: id e itemsSold ?', async function () {
//       const result = await salesService.create(mockSale3);
//       expect(result).to.be.an('object');
//       expect(result).to.include.all.keys('id', 'itemsSold');
//     });
//     it('3.2 O tipo do valor id é number e de itemsSold é um objeto?', async function () {
//       const result = await salesService.create(mockSale3);
//       expect(result.id).to.be.an('Number');
//       expect(result.itemsSold).to.be.an('object');
//     });
//     it('3.3 As chaves do objeto itemsSold são: product_id, quantity ?', async function () {
//       const result = await salesService.create(mockSale3);
//       expect(result.itemsSold).to.include.all.keys('product_id', 'quantity');
//     });
//   });

//   describe('5. Função updateQuantity:', function () {
//     before(function () {
//       Sinon.stub(salesModel, 'updateQuantity').resolves();
//       Sinon.stub(salesModel, 'getByIdSale').resolves(mockSale6);
//     });
//     after(function () {
//       salesModel.updateQuantity.restore();
//       salesModel.getByIdSale.restore();
//     });
//     it('5.1 Retonar o objeto alterado e com as chaves: saleId e saleId?', async function () {
//       const result = await salesService.updateQuantity(mockSale7);
//       expect(result).to.include.all.keys('saleId', 'itemUpdated');
//     });
//     it('5.2 A chave saleId é tipo number, a chave itemUpdated é um array com objetos dentro?', async function () {
//       const result = await salesService.updateQuantity(mockSale7);
//       expect(result.saleId).to.be.an('Number');
//       result.itemUpdated.map((item) => {
//         expect(item).to.be.an('object');
//       });
//     });
//     it('5.3 No array itemUpdated que contém objetos, as chaves objetos dentro são: id e data?', async function () {
//       const result = await salesService.updateQuantity(mockSale7);
//       expect(result.saleId).to.be.an('Number');
//       result.itemUpdated.map((item) => {
//         expect(item).to.include.all.keys('id', 'date');
//       });
//     });
//   });
// });
