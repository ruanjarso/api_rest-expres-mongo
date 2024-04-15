import express from "express";

const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).send("TESTE 1");
});

app.get("/prox/:id",(req,res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

export default app;