const { expect } = require("chai");
const sinon = require("sinon");

const salesModels = require("../../../src/models/sales.model");
const connection = require("../../../src/models/connection");

const { getAllSalesMock, getSalesByIdMock } = require("./mocks/sales.mock");

describe("Testes de unidade do model de sales", function () {
  describe('Testar o "getAllSales"', function () {
    it("Verifica se retornando todas as vendas", async function () {
      sinon.stub(connection, "execute").resolves([getAllSalesMock]);

      const sales = await salesModels.getAllSales();

      expect(sales).to.be.deep.equal(getAllSalesMock);
      expect(sales).to.be.an("array");
      expect(sales).to.have.length(3);
    });
    it("Verificar caso não tenha o retorno dos produtos", async function () {
      sinon.stub(connection, "execute").resolves([]);

      const sales = await salesModels.getAllSales();

      expect(sales).to.not.deep.equal(getAllSalesMock);
      expect(sales).to.be.equal(undefined);
    });
  });

  describe("Testar o getSalesById", function () {
    it("Verifica se o retorno de uma venda pelo id", async function () {
      sinon.stub(connection, "execute").resolves([getSalesByIdMock]);

      const sales = await salesModels.getSalesById(1);

      expect(sales).to.deep.equal(getSalesByIdMock);
    });
  });

  afterEach(() => sinon.restore());
});
