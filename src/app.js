import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import Livros from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.log("Erro ao conectar no MongoDB: " + erro);
})

conexao.once("open", () => {
    console.log("Conectado no MongoDB");
})

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

// app.get("/livros", async (req, res) => {
//     const listaLivros = await Livros.find({});
//     res.status(200).json(listaLivros);
// })

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(201).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    livros[index].autor = req.body.autor;
    livros[index].ano = req.body.ano;
    res.status(201).send("Livro atualizado com sucesso");
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})

export default app;


// mongodb+srv://admin:<password>cluster0.yyoob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0