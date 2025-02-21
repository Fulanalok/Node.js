const fs = require("fs");

if (!fs.existsSync("./minhapasta")) {
  console.log("nao existe!");
  fs.mkdirSync("minhapasta");
} else if (fs.existsSync("./minhapasta")) {
  console.log("Existe");
}
