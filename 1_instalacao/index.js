const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

// Verifica a conexão com o banco de dados antes de iniciar o servidor
conn
  .authenticate()
  .then(() => {
    console.log("Conectamos com sucesso com o sequelize");
    app.listen(3000, () => {
      console.log("App rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.log("Nao foi possivel conectar:", err);
  });
