const http = require("http");

const port = 3000

const server = http.createServer((req, res) => {

    res.write('Ola HTTP')
    res.end()

})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})