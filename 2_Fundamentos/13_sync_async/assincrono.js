const fs = require("fs");

console.log("Inicio");

fs.writeFile("arquivo.txt", "conteudo do arquivo", function (err) {
  setTimeout(function () {
    console.log("Delay")
  }, 1000)
})


console.log("Depois do Fim");