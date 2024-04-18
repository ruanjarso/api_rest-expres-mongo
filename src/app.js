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

app.get("/",(req,res) => {
    res.status(200).send("TESTE 1");
});

app.get("/prox/:id",(req,res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});


export default app;