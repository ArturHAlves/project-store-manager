const { expect } = require("chai");
const sinon = require("sinon");

const productsService = require("../../../src/services/products.service");
const productsModel = require("../../../src/models/products.model");
const {
  getAllMockProduts,
  getByIdMockProducts,
  newProduct,
  deleteProduct
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

  describe('Testar "createProduct"', function () {
    it("Verificar se o retorno está correto", async function () {
      sinon.stub(productsModel, "createProduct").resolves(newProduct);

      const products = await productsService.createProduct({
        id: 4,
        name: "produtoXXX",
      });

      expect(products).to.be.deep.equal(newProduct);
      expect(products).to.be.an("object");
    });
  });

  describe('Testar "deleteProduct"', function () {
    it('Verificar se o retorno está correto', async function () {
      sinon.stub(productsModel, 'deleteProduct').resolves(deleteProduct);

      const products = await productsService.deleteProduct(1);

      expect(products).to.be.deep.equal(deleteProduct);
      expect(products).to.be.an('object');
    });
  });

  afterEach(() => sinon.restore());
});
