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
    if(req.url === "/"){
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end("Hello")
        return;
    }
    if(req.url === "/quotes" && req.method === "GET"){
        const quote = [
            {
                quote: "The greatest of follies is sacrificing your health for any other type of happinessThe greatest of follies is sacrificing your health for any other type of happiness",
                author: "Arthur Shopenhauer"
            },
            {
                quote: "Deus está morto! Deus continua morto! E nós o matamos!",
                author: "Friedrich Nietzsche"
            },
            {
                quote: "A vida é uma doença incurável e a morte é o seu remédio final.",
                author: "Arthur Schopenhauer"
            },
            {
                quote: "Não há fatos, apenas interpretações.",
                author: "Friedrich Nietzsche"
            },
            {
                quote: "A arte existe para que a verdade não nos destrua.",
                author: "Friedrich Nietzsche"
            },
            {
                quote: "O que não me mata, me fortalece.",
                author: "Friedrich Nietzsche"
            },
            {
                quote: "A felicidade é um problema individual. Aqui, nenhum conselho é válido. Cada um deve procurar, por si, tornar-se feliz.",
                author: "Arthur Schopenhauer"
            },
            {
                quote: "A maior descoberta de minha geração é que um ser humano pode alterar sua vida alterando sua atitude mental.",
                author: "William James"
            },
            {
                quote: "A vida é uma busca pela verdade.",
                author: "Sócrates"
            },
            {
                quote: "A única coisa que sei é que nada sei.",
                author: "Sócrates"
            },
            {
                quote: "Penso, logo existo.",
                author: "René Descartes"
            },
            {
                quote: "A vida é curta, a arte é longa.",
                author: "Hipócrates"
            },
            {
                quote: "A essência do homem é a busca do conhecimento.",
                author: "Aristóteles"
            },
            {
                quote: "O homem é a medida de todas as coisas.",
                author: "Protágoras"
            },
            {
                quote: "O homem é livre, mas está acorrentado pelas suas paixões.",
                author: "Jean-Jacques Rousseau"
            },
            {
                quote: "Só sei que nada sei.",
                author: "Sócrates"
            },
            {
                quote: "Tudo o que é sólido desmancha no ar.",
                author: "Karl Marx"
            },
            {
                quote: "A razão governa o mundo.",
                author: "Immanuel Kant"
            },
            {
                quote: "A vida não examinada não vale a pena ser vivida.",
                author: "Sócrates"
            },
            {
                quote: "O homem é a medida de todas as coisas.",
                author: "Protágoras"
            },
            {
                quote: "A única coisa que sei é que nada sei.",
                author: "Sócrates"
            },
            {
                quote: "A mente é tudo; o que você pensa, você se torna.",
                author: "Buda"
            },
            {
                quote: "Eu penso, logo existo.",
                author: "René Descartes"
            },
            {
                quote: "Nada pode nos salvar da morte.",
                author: "Jean-Paul Sartre"
            },
            {
                quote: "O homem é o lobo do homem.",
                author: "Thomas Hobbes"
            },
            {
                quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
                author: "John Lennon"
            },
            {
                quote: "A felicidade é a ausência de sofrimento.",
                author: "Aristóteles"
            },
            {
                quote: "Amar é encontrar na felicidade de outrem a própria felicidade.",
                author: "Gottfried Leibniz"
            },
            {
                quote: "Nada é mais real do que o vazio.",
                author: "Laozi"
            },
            {
                quote: "Não há absoluto em nada.",
                author: "Friedrich Nietzsche"
            }
        ]
        

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(quote))
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
