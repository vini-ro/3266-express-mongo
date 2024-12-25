import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.log("Erro ao conectar no MongoDB: " + erro);
})

conexao.once("open", () => {
    console.log("Conectado no MongoDB");
})

const app = express();
routes(app);


app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})

export default app;


// mongodb+srv://admin:<password>cluster0.yyoob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0