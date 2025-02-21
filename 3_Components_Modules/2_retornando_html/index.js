const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Contenty-Type", "text/html");
  res.end(
    "<h1>Ola, meu primeiro server com html </h1><p> testando atualizacao</p>"
  );
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
