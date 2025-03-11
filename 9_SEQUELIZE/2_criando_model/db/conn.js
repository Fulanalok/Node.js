const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// async function connect() {
//   try {
//     await sequelize.authenticate();
//     console.log("Conectamos com sucesso com o sequelize");
//   } catch (err) {
//     console.log("Nao foi possivel conectar", err);
//   }
// }

// connect();

module.exports = sequelize;
