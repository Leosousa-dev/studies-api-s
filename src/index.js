import http from "node:http";
import quotes from "./quotes.js"



const port = 3000;

/*
    Headers 
    - "text/plain"
    - "text/html"
    - "application/xml"
    - "multipart/form-data"
    - "application/json"
    - "image/jpeg, image/png, image/gif"
*/

const server  = http.createServer((req, res) => {
    if(req.url === "/"){
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end("Hello")
        return;
    }
    if(req.url === "/quotes" && req.method === "GET"){

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(quotes))
    }else{
        res.statusCode = 400
        res.setHeader("Content-Type", "text/html")
        res.end("Not Found")
        return;
    }
})

server.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/`);
})
