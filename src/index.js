import http from "node:http";

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

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const responseData = { "say": "hello" };
    const jsonResponse = JSON.stringify(responseData);
    
    res.end(jsonResponse);
});

server.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/`);
})
