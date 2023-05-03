const chai = require("chai");
const { expect } = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const sinon = require("sinon");

const productsController = require("../../../src/controllers/products.controller");
const productsService = require("../../../src/services/products.service");
const {
  getAllMockProduts,
  getByIdMockProducts,
  deleteProduct,
} = require("./mocks/products.mock");

describe("Testes de unidade do Controller de produtos", function () {
  describe("Testar getAllProducts", function () {
    it("Verificar se a resposta está correta", async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, "getAllProducts").resolves(getAllMockProduts);
      await productsController.getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getAllMockProduts);
    });
  });

  describe("Testar getByIdProducts", function () {
    it("Verificar se a resposta está correta", async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productsService, "getProductById")
        .resolves(getByIdMockProducts);

      await productsController.getProductById(req, res);

      expect(res.status).to.be.have.been.calledWith(200);
      expect(res.json).to.be.have.been.calledWith(getByIdMockProducts);
    });
  });

  describe("Testar 'createProduct'", function () {
    it("Verificar se a resposta está correta", async function () {
      const res = {};
      const req = { body: { name: "produtoXXX" } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.createProduct(req, res);

      expect(res.status).to.be.have.been.calledWith(201);
    });
  });

  describe('Testar "deleteProduct"', function () {
    it("Verificar se a resposta está correta", async function () {
      const res = {};
      const req = { params: { id: 1 } };

      sinon.stub(productsService, "deleteProduct").resolves(deleteProduct);

      res.status = sinon.stub().returns(res);
      res.end = sinon.stub().returns();

      await productsController.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(204);
    });
  });

  afterEach(() => sinon.restore());
});
