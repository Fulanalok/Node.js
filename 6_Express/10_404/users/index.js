// Importa o módulo express
var express = require("express");
// Cria uma instância do router
var router = express.Router();

// Importa o módulo path para trabalhar com caminhos de arquivos
const path = require("path");

// Define o caminho base para os templates
const basePath = path.join(__dirname, "../templates");

// Rota para exibir o formulário de adição de usuário
router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

// Rota para salvar os dados do usuário
router.post("/save", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;

  console.log(name);
  console.log(age);

  // Adicione uma resposta para o cliente após salvar os dados
  res.send("Dados do usuário salvos com sucesso!");
});

// Rota para carregar os dados de um usuário específico
router.get("/:id", (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`);

  res.sendFile(`${basePath}/users.html`);
});

// Exporta o router para ser usado em outros módulos
module.exports = router;
