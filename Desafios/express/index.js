const express = require('express')
const app = express()
const port = 5000;

const path = require('path')

const basePath = path.join(__dirname, "templates")

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta:${port}`);
})
