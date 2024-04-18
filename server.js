import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const routes = [{
    "/":"rota 1",
    "/produtos":"rota 2",
    "/route3":"rota3"
}]

const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(routes[req.url]);
});

app.listen(PORT,() => {
    console.log("escutando servidor!");
});