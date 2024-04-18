import express from "express";

const app = express();
app.use(express.json());

const produtos = [{
    "id": "1",
    "produto":"produto 1",
    "preço": 10,
    "quantidade": 10
},
{
    "id": "2",
    "produto": "produto 2",
    "preço": 20,
    "quantidade": 20
}]

app.get("/produtos",(req,res) => {
    res.status(200).json(produtos);
});

app.post("/produtos",(req,res) => {
    res.status(200).send("produto cadastrado!")
    produtos.push(req.body);
});

export default app;