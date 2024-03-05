import http from "node:http";
import url from "node:url";
import quotes from "./quotes.js"


const port = 3000;

const server  = http.createServer((req, res) => {
    // Parse da URL da requisição
    const parsedUrl = url.parse(req.url, true);

    // Obtendo os parâmetros da URL
    const queryParams = parsedUrl.query;
    
    // Imprimindo os parâmetros no terminal
    console.log('Parâmetros da URL:', queryParams);
  
    // Construindo o HTML de resposta
    const responseHtml = `
      <html>
        <head>
          <title>Parâmetro da URL</title>
        </head>
        <body>
          <h1>${queryParams.parametro}</h1>
        </body>
      </html>
    `;
  
    // Configurando os cabeçalhos da resposta
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    // Enviando a resposta HTML
    res.end(responseHtml);
});

server.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/?nome=Joao&idade=30`);
})
