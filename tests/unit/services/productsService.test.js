const { expect } = require("chai");

const sinon = require("sinon");

const productsService = require("../../../src/services/products.service");
const productsModel = require("../../../src/models/products.model");
const {
  getAllMockProduts,
  getByIdMockProducts,
} = require("./mocks/products.mock");

describe("Testes de unidade do service de produtos", function () {
  describe("Testar getAllProducts", function () {
    it("Verificar se o retorno está correto", async function () {
      sinon.stub(productsModel, "getAllProducts").resolves(getAllMockProduts);

      const products = await productsService.getAllProducts();

      expect(products).to.be.deep.equal(getAllMockProduts);
    });
  });

  describe("Testar getByIdProducts", function () {
    it("Verificar se o retorno está correto", async function () {
      sinon.stub(productsModel, "getProductById").resolves(getByIdMockProducts);

      const products = await productsService.getProductById(1);

      expect(products).to.be.deep.equal(getByIdMockProducts);
    });
  });

  afterEach(() => sinon.restore());
});
