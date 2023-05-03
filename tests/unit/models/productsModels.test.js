const { expect } = require("chai");
const sinon = require("sinon");

const produtcsModel = require("../../../src/models/products.model");
const connection = require("../../../src/models/connection");
const {
  getAllMockProduts,
  getByIdMockProducts,
  newProduct,
  deleteProduct,
} = require("./mocks/products.mock");

describe("Testes de unidade do model de produtos", function () {
  describe("Testar getAllProducts", function () {
    it("Verificar se o retorno pega todos os produtos", async function () {
      sinon.stub(connection, "execute").resolves([getAllMockProduts]);

      const products = await produtcsModel.getAllProducts();

      expect(products).to.deep.equal(getAllMockProduts);
      expect(products).to.have.length(3);
      expect(products).to.be.an("array");
    });

    it("Verificar caso não tenha o retorno dos produtos", async function () {
      sinon.stub(connection, "execute").resolves([]);

      const products = await produtcsModel.getAllProducts();

      expect(products).to.not.deep.equal(getAllMockProduts);
      expect(products).to.be.equal(undefined);
    });
  });

  describe('Testar "getByIdProducts"', function () {
    it("Verificar o retorno do produto apartir do id", async function () {
      sinon.stub(connection, "execute").resolves([[getByIdMockProducts]]);

      const products = await produtcsModel.getProductById(1);

      expect(products).to.deep.equal(getByIdMockProducts);
    });
  });

  describe('Testar "createProduct"', function () {
    it("Verificar se está cadastrando um produto", async function () {
      sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);

      const products = await produtcsModel.createProduct("produtoXXX");

      expect(products).to.deep.equal(newProduct);
      expect(products).to.contain.keys("id", "name");
      expect(products.id).to.equal(4);
    });
  });

  describe('Testar "deleteProduct"', function () {
    it("Verificar se está deletando um produto", async function () {
      sinon.stub(connection, "execute").resolves([deleteProduct]);

      const products = await produtcsModel.deleteProduct(1);

      expect(products).to.be.equal(1);
    });
  });

  afterEach(() => sinon.restore());
});
