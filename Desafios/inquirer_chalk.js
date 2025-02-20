import chalk from "chalk";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual é o seu nome?",
    },
    {
      name: "idade",
      message: "Qual é a sua idade?",
    },
  ])
    .then((answers) => {
        if (!answers.nome || !answers.idade) {
            throw new Error("Preencha todos os campos!")
        }
    console.log(answers);
    const nome = answers.nome;
    const idade = answers.idade;

    console.log(chalk.yellow(`Olá, ${nome}!`));
    console.log(chalk.black(`Você tem ${idade} anos.`));
  })
  .catch((err) => console.log(err));

  