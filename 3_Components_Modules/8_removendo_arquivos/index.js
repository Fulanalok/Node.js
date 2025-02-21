const fs = require("fs");

fs.unlink("arquivo.txt", function (err) {
    if (err) {
        console.log(err)
        return
    }

    console.log("Arquivo deletado com sucesso")
});