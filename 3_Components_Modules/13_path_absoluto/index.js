const path = require("path");

//path absoluto
console.log(path.resolve("text.txt"));

// former path
const midFolder = "relatorios";
const fileName = "lucas.txt"

const finalPath = path.join("/", 'arquivos', midFolder, fileName);

console.log(finalPath)