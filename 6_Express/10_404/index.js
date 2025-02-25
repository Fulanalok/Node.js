// Importa o módulo express
const express = require("express");
// Cria uma instância do express
const app = express();
// Define a porta em que o servidor vai rodar
const port = 3000;

// Importa o módulo path para trabalhar com caminhos de arquivos
const path = require("path");

// Define o caminho base para os templates
const basePath = path.join(__dirname, "templates");

// Importa as rotas do módulo users
const users = require("./users");

// Middleware para ler o body das requisições
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Middleware para ler JSON no body das requisições
app.use(express.json());

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static("public"));

// Middleware de autenticação
var checkAuth = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Está logado, pode continuar");
    next();
  } else {
    console.log("Não está logado, faça o login para continuar!");
  }
};

// Aplica o middleware de autenticação globalmente
app.use(checkAuth);

// Usa as rotas do módulo users para a rota /users
app.use("/users", users);

// Rota para a página inicial
app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

// Middleware para tratar erros 404 (página não encontrada)
app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`App rodando na porta:${port}`);
});
