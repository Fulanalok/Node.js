const fs = require("fs")

console.log("Inicio")

fs.writeFileSync("arquivo.txt", "conteudo do arquivo")

console.log("Fim")