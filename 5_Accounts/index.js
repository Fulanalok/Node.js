// modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// modulos internos
const fs = require("fs");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "o que voce deseja fazer?",
        choices: [
          "criar conta",
          "consultar saldo",
          "depositar",
          "sacar",
          "sair",
        ],
      },
    ])
    .then((answers) => {
      const action = answers["action"];

      if (action === "criar conta") {
        createAccount();
      } else if (action === "consultar saldo") {
        getAccountBalance();
      } else if (action === "depositar") {
        deposit();
      } else if (action === "sacar") {
        withdraw();
      } else if (action === "sair") {
        console.log(
          chalk.bgYellowBright("Obrigado por usar o nosso banco Accounts!")
        );
        process.exit();
      }
    })
    .catch((arr) => {
      console.log(chalk.red("erro ao ler a resposta"));
    });
}

// create an account
function createAccount() {
  console.log(chalk.bgGreen.black("Obrigado por escolher o nosso banco"));
  console.log(chalk.green("Defina as opcoes da sua conta a seguir"));

  buildAccount();
}

// build an account
function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountname",
        message: "Digite um nome para sua conta",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountname"];

      console.log(accountName);

      if (!fs.existsSync("./accounts")) {
        fs.mkdirSync("./accounts");
      }

      if (fs.existsSync(`./accounts/${accountName}.json`)) {
        console.log(chalk.red("esta conta ja existe"));
        return operation();
      }

      fs.writeFileSync(
        `./accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );

      console.log(chalk.green("Conta criada com sucesso!"));
      operation();
    })
    .catch((err) => {
      console.log(chalk.red("erro ao criar a conta"));
    });
}

// add an amount to use account
function deposit() {
  inquirer
    .prompt([
      {
        name: "accountname",
        message: "Digite o nome da conta",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountname"];

      // verify if account exists
      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Digite o valor a ser depositado",
          },
        ])
        .then((answer) => {
          const amount = parseFloat(answer["amount"]);

          addAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    });
}

// show account balance
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      // verificar se a conta existe
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }

      const accountData = getAccount(accountName);

      console.log(
        chalk.bgBlue.black(
          `O saldo da conta ${accountName} é de R$${accountData.balance}`
        )
      );
      operation();
    })
    .catch((err) => console.log(err));
}

// get an amount from account
function withdraw() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        return withdraw();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Digite o valor a ser sacado",
          },
        ])
        .then((answer) => {
          const amount = parseFloat(answer["amount"]);

          removeAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    });
}

function checkAccount(accountName) {
  if (!fs.existsSync(`./accounts/${accountName}.json`)) {
    console.log(chalk.red("Conta não existente"));
    return false;
  }
  return true;
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.black("ocorreu um erro, tente novamente mais tarde"));
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function err(err) {
      if (err) {
        console.log(err);
      }
    }
  );
  console.log(chalk.green(`Foi depositado o valor de R$${amount} na conta`));
  operation();
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.black("ocorreu um erro, tente novamente mais tarde"));
    return withdraw();
  }

  if (accountData.balance < amount) {
    console.log(chalk.red("Saldo insuficiente"));
    return withdraw();
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function err(err) {
      if (err) {
        console.log(err);
      }
    }
  );
  console.log(chalk.green(`Foi sacado o valor de R$${amount} da conta`));
  operation();
}

function getAccount(accountName) {
  const data = fs.readFileSync(`./accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  return JSON.parse(data);
}
