import http from "http";

const PORT = 3000;

const routes = [{
    "/":"rota 1",
    "/route2":"rota 2",
    "/route3":"rota3"
}]

const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(routes[req.url]);
});

server.listen(PORT,() => {
    console.log("escutando servidor!");
});