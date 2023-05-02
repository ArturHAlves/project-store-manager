const chai = require("chai");
const { expect } = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const sinon = require("sinon");

const salesController = require("../../../src/controllers/sales.controller");
const salesService = require("../../../src/services/sales.service");
const {
  getAllSalesMock,
  getSalesByIdMock,
  invalidProduct,
} = require("./mocks/sales.mock");

describe("Teste de unidade de controller do sales", function () {
  describe('Testar "getAllSales"', function () {
    it("Verificar se a reposta está correta", async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, "getAllSales").resolves(getAllSalesMock);
      await salesController.getAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getAllSalesMock);
    });
  });

  describe('Testar "getSalesById"', function () {
    it("Verificar se a resposta está correta", async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, "getSalesById").resolves(getSalesByIdMock);
      await salesController.getSalesById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(getSalesByIdMock);
    });
    it("Verificar caso o produto não exista", async function () {
      const res = {};
      const req = { params: { id: 666 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, "getSalesById").resolves(invalidProduct);
      await salesController.getSalesById(req, res);

      expect(res.status).to.have.been.calledWith(404);
    });
  });

  afterEach(() => sinon.restore());
});
