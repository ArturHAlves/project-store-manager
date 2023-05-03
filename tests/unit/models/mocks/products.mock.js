const getAllMockProduts = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const getByIdMockProducts = {
  id: 1,
  name: "Martelo de Thor",
};

const newProduct = {
  id: 4,
  name: "produtoXXX",
};

const deleteProduct = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: "",
  serverStatus: 2,
  warningStatus: 0,
};


module.exports = { getAllMockProduts, getByIdMockProducts, newProduct, deleteProduct };
