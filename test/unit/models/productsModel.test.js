const { expect } = require('chai');
const Sinon = require('sinon');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('Camada models de produtos:', () => {
  const mockInputProduct1 = { id: 1, name: 'Pc Gamer', quantity: 10 };
  const mockInputProduct2 = { id: 2, name: 'Motocicleta', quantity: 20 };
  const mockInserId = { insertId: 1};

  describe('1. Função getAll:', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([[mockInputProduct1]]);
    });
    after(() => {
      connection.execute.restore();
    })
    it('1.1 A função `getAll()`, retorna um array?', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.an('array');
    });
    it('1.2 Todos os itens do array são do tipo objeto?', async () => {
      const result = await productsModel.getAll();
      result.map((item) => {
        expect(item).to.be.an('object');
      });
    });
    it('1.3 Todos os objetos têm estas chaves: `id`, `name` e `quantity`?', async () => {
      const result = await productsModel.getAll();
      result.map((item) => {
        expect(item).to.include.all.keys('id', 'name', 'quantity');
      });
    })
  });

  describe('2. Função getByName:', () => {
    describe('2.1 Banco com dados:', () => {
      before(() => {
        Sinon.stub(connection, 'execute').resolves([[mockInputProduct1.name]]);
      });
      after(() => {
        connection.execute.restore();
      })
      it('2.1.1 O retorno é do tipo `string`?', async () => {
        const result = await productsModel.getByName(mockInputProduct1.name);
        expect(result).to.be.an('String');
      });
      it('2.1.2 Retorna o nome se existir?', async () => {
        const result = await productsModel.getByName(mockInputProduct1.name);
        expect(result).to.be.equal(mockInputProduct1.name);
      });
    });
    describe('2.2 Banco sem dados:', () => {
      before(() => {
        Sinon.stub(connection, 'execute').resolves([[]]);
      });
      after(() => {
        connection.execute.restore();
      });
      it('2.2.1 Retorna `undefined`?', async () => {
        const result = await productsModel.getByName(mockInputProduct1.name);
        expect(result).to.be.undefined;
      });
    });
  });

  describe('3. Função create:', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([mockInserId]);
    });
    after(() => {
      connection.execute.restore();
    })
    it('3.1 Retorna um objecto com as chaves: `id`, `name` e `quantity` ?', async () => {
      const result = await productsModel.create({ name: 'VideoGame', quantity: 10 });
      expect(result).to.include.all.keys('id', 'name', 'quantity'); 
    });
    it('3.2 Os dados recebido é um objeto com as chaves: `name` e `quantity`, com valores do tipo string e number?', async () => {
      const objeto = { quantity: 10, name: 'bbb' };
      const result = await productsModel.create(objeto);
      expect(result).to.be.an('object');
      expect(result.name).to.be.an('String');
      expect(result.quantity).to.be.an('Number');
    });
  });

  describe('4. Função getById:', () => {
    describe('4.1 Banco com dados:', () => {
      before(() => {
        Sinon.stub(connection, 'execute').resolves([[mockInputProduct1.id]]);
      });
      after(() => {
        connection.execute.restore();
      })
      it('4.1.1 O retorno é do tipo `number`?', async () => {
        const result = await productsModel.getById(mockInputProduct1.id);
        expect(result).to.be.an('Number');
      });
    });
    describe('4.2 Banco sem dados:', () => {
      before(() => {
        Sinon.stub(connection, 'execute').resolves([[]]);
      });
      after(() => {
        connection.execute.restore();
      });
      it('4.2.1 Retorna `undefined`?', async () => {
        const result = await productsModel.getById(mockInputProduct1.id);
        expect(result).to.be.undefined;
      });
    });
  });

  describe('5. Função update:', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([[mockInputProduct1]]);
    });
    after(() => {
      connection.execute.restore();
    })
    it('5.1 Retonar o objeto alterado e com as chaves: `id`, `name` e `quantity`?', async () => {
      const result = await productsModel.update(mockInputProduct2);
      expect(result).to.include.all.keys('id', 'name', 'quantity');
    });
  });

  describe('6. Função delete:', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([[mockInputProduct1]]);
    });
    after(() => {
      connection.execute.restore();
    })
    it('6.1 Retonar o um objeto com o `id` do produto deletado?', async () => {
      const result = await productsModel.deleteById(mockInputProduct1.id);
      expect(result).to.be.a('object');
      expect(result).to.include.all.keys('id');
    });
  });
});
