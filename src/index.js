import http from "node:http";
import url from "node:url";
import quotes from "./quotes.js"


const port = 3000;

const server  = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

  const queryParams = parsedUrl.query;

  if (Object.keys(queryParams).length > 0) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Parâmetros da URL: ${JSON.stringify(queryParams)}\n`);
  } else {
    res.statusCode = 404;
    res.end('Nenhum parâmetro encontrado na URL\n');
  }
});

server.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/?nome=Joao&idade=30`);
})
