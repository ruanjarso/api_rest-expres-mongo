import express from "express";

const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).send("TESTE 1");
})

export default app;