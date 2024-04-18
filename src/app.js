import express from "express";

const app = express();
app.use(express.json());

const produtos = [{
    "id": 1,
    "produto":"produto 1",
    "preço": 10,
    "quantidade": 10
},
{
    "id": 2,
    "produto": "produto 2",
    "preço": 20,
    "quantidade": 20
}]

function buscaProduto (id) {
    return produtos.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/produtos",(req,res) => {
    res.status(200).json(produtos);
});

app.get("/produtos/:id", (req,res) => {
    const index = buscaProduto(req.params.id);
    res.status(200).json(produtos[index]);
})

app.put("/produtos/:id", (req,res) => {
    const index = buscaProduto(req.params.id);
    produtos[index].produto = req.body.produto;
    res.status(200).send("atualizado");
})

app.post("/produtos",(req,res) => {
    res.status(200).send("produto cadastrado!")
    produtos.push(req.body);
});



export default app;