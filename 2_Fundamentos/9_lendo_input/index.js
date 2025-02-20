const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual sua lingugagem preferida?", (linguagem) => {
    if (linguagem === "Python") {
        console.log("Melhore a linguagem!");
    } else {
        console.log(`A minha linguagem preferida é ${linguagem}`);
    }
  readline.close();
});
