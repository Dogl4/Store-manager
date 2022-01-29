const { expect } = require('chai');
const Sinon = require('sinon');
const productsService = require('../../services/productsService');
const productsModel = require('../../models/productsModel');

describe('Camada services de produtos:', () => {
  const mockProducts1 = [{ id: 1, name: 'Pc Gamer', quantity: 10 },
  { id: 2, name: 'Motocicleta', quantity: 20 }];
  const mockProduct2 = { id: 1, name: 'Pc Gamer', quantity: 10 };
  const mockProduct3 = { name: 'Pc Gamer', quantity: 10 };
  const mockId = { id: 1 };

  describe('1. Função getAll:', () => {
    before(() => {
      Sinon.stub(productsModel, 'getAll').resolves(mockProducts1);
    });
    after(() => {
      productsModel.getAll.restore();
    })
    it('1.1 A função `getAll()`, retorna um array?', async () => {
      const result = await productsService.getAll();
      expect(result).to.be.an('array');
    });
    it('1.2 Todos os itens do array são do tipo objeto?', async () => {
      const result = await productsService.getAll();
      result.map((item) => {
        expect(item).to.be.an('object');
      });
    });
    it('1.3 Todos os objetos têm estas chaves: `id`, `name` e `quantity`?', async () => {
      const result = await productsService.getAll();
      result.map((item) => {
        expect(item).to.include.all.keys('id', 'name', 'quantity');
      });
    })
  });

  describe('2. Função create:', () => {
    before(() => {
      Sinon.stub(productsModel, 'create').resolves(mockProduct2);
    });
    after(() => {
      productsModel.create.restore();
    })
    it('2.1 Retorna um objecto com as chaves: `id`, `name` e `quantity` ?', async () => {
      const result = await productsService.create(mockProduct3);
      expect(result).to.include.all.keys('id', 'name', 'quantity'); 
    });
    it('2.2 Os dados recebido é um objeto com as chaves: `name` e `quantity`, com valores do tipo string e number?', async () => {
      const result = await productsService.create(mockProduct3);
      expect(result).to.be.an('object');
      expect(result.name).to.be.an('String');
      expect(result.quantity).to.be.an('Number');
    });
  });

  describe('3. Função getByName:', () => {
    describe('3.1 Com parâmetro typeof string passado:', () => {
      before(() => {
        Sinon.stub(productsModel, 'getByName').resolves(mockProduct2.name);
      });
      after(() => {
        productsModel.getByName.restore();
      })
      it('3.1.1 O retorno é do tipo `string`?', async () => {
        const result = await productsService.getByName(mockProduct2.name);
        expect(result).to.be.an('String');
      });
      it('3.1.2 Retorna o nome se existir?', async () => {
        const result = await productsService.getByName(mockProduct2.name);
        expect(result).to.be.equal(mockProduct2.name);
      });
    });
    describe('3.2 Sem parâmetro passado:', () => {
      before(() => {
        Sinon.stub(productsModel, 'getByName').resolves();
      });
      after(() => {
        productsModel.getByName.restore();
      });
      it('3.2.1 Retorna `undefined`?', async () => {
        const result = await productsService.getByName(mockProduct2.name);
        expect(result).to.be.undefined;
      });
    });
  });

  describe('4. Função getById:', () => {
    describe('4.1 Com parâmetro:', () => {
      before(() => {
        Sinon.stub(productsModel, 'getById').resolves(mockProduct2);
      });
      after(() => {
        productsModel.getById.restore();
      })
      it('4.1.1 O retorno é um objeto?', async () => {
        const result = await productsService.getById(mockId);
        expect(result).to.be.an('object');
      });
      it('4.1.2 O objeto contém as chaves: `id`, `name` e `quantity`?', async () => {
        const result = await productsService.getById(mockId);
        expect(result).to.include.all.keys('id', 'name', 'quantity');
      });
      it('4.1.3 As chaves: `id` é do tipo number, `name` é do tipo string e `quantity` é do tipo number?', async () => {
        const result = await productsService.getById(mockId);
        expect(result.id).to.be.an('Number');
        expect(result.name).to.be.an('String');
        expect(result.quantity).to.be.an('Number');
      });
    });
    describe('4.2 Sem parâmetro passado:', () => {
      before(() => {
        Sinon.stub(productsModel, 'getById').resolves();
      });
      after(() => {
        productsModel.getById.restore();
      });
      it('4.2.1 Retorna `undefined`?', async () => {
        const result = await productsService.getById(mockProduct2.id);
        expect(result).to.be.undefined;
      });
    });
  });

  describe('5. Função update:', () => {
    before(() => {
      Sinon.stub(productsModel, 'update').resolves(mockProduct2);
    });
    after(() => {
      productsModel.update.restore();
    })
    it('5.1 Retonar o objeto alterado e com as chaves: `id`, `name` e `quantity`?', async () => {
      const result = await productsService.update(mockProduct2);
      expect(result).to.include.all.keys('id', 'name', 'quantity');
    });
    it('5.2 A chave `id` é tipo number, a chave `name` é do tipo string e a chave`quantity` é do tipo number?', async () => {
      const result = await productsService.update(mockProduct2);
      expect(result.id).to.be.an('Number');
      expect(result.name).to.be.an('String');
      expect(result.quantity).to.be.an('Number');
    });
  });

  describe('6. Função delete:', () => {
    before(() => {
      Sinon.stub(productsModel, 'deleteById').resolves(mockProduct2);
    });
    after(() => {
      productsModel.deleteById.restore();
    })
    it('6.1 Retonar o um objeto com o `id` do produto deletado?', async () => {
      const result = await productsModel.deleteById(mockProduct2.id);
      expect(result).to.be.a('object');
      expect(result).to.include.all.keys('id');
    });
    it('6.2 O tipo do valor da chave `id` é number?', async () => {
      const result = await productsModel.deleteById(mockProduct2.id);
      expect(result.id).to.be.an('Number');
    });
  });
});
