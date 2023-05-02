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
} = require('./mocks/products.mock');

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
    // it("Verificar se não existir um id invalido", async function () {
    //   const res = {};
    //   const req = { params: { id: 777 } };

    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();

    //   sinon.stub(productsService, "getProductById").resolves(undefined);

    //   const result = await productsController.getProductById(req, res);

    //   console.log(result);

    //   expect(res.status).to.have.been.calledWith(404);
    //   // expect(res.json).to.have.been.calledWith({
    //   //   message: 'Product not found',
    //   // });
    // });
  });

  afterEach(() => sinon.restore());
});
