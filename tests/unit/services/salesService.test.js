const { expect } = require("chai");
const sinon = require("sinon");

const salesService = require("../../../src/services/sales.service");
const salesModels = require("../../../src/models/sales.model");
const { getAllSalesMock, getSalesByIdMock } = require("./mocks/sales.mock");

describe("Testar de unidades do services de sales", function () {
  describe('Testar "getAllSales"', function () {
    it("Verificar se o retorno está correto", async function () {
      sinon.stub(salesModels, "getAllSales").resolves(getAllSalesMock);

      const sales = await salesService.getAllSales();

      expect(sales).to.deep.equal(getAllSalesMock);
    });
  });

  describe('Testar "getSalesById"', function () {
    it("Verificar se o retorno está correto quando passado o id", async function () {
      sinon.stub(salesModels, "getSalesById").resolves(getSalesByIdMock);

      const sales = await salesService.getSalesById(1);

      expect(sales).to.deep.equal(getSalesByIdMock);
    });
  });

  afterEach(() => sinon.restore());
});
