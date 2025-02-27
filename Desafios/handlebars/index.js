const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials/"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", function (req, res) {
  const user = {
    name: "Lucas",
    surname: "Vilhena",
    age: 20,
  };

  res.render("home", { user });
});

app.get("/salgadinhos", function (req, res) {
  const salgados = [
    "pippos de churrasco",
    "pippos de queijo",
    "pippos de milho",
    "pippos de pizza",
  ];

  res.render("salgadinhos", { comidas: salgados });
});

app.get("/cafe", function (req, res) {
  const cafes = ["forte", "com leite", "expresso", "napolitano"];

  res.render("cafe", { bebidas: cafes });
});

app.get("/bolos", function (req, res) {
  const bolos = ["laranja", "baunilha", "chocolate", "cenoura"];

  res.render("bolos", { bolinhos: bolos });
});

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
