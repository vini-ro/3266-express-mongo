import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar livros.` });
        }
    }
    static async listarLivroPorID(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar livros.` });
        }
    }
    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({messege: "Livro cadastrado com sucesso", livro:  novoLivro});

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro.` });
        }
    }
    static async atualizarLivro (req, res) {
        try {
          const id = req.params.id;
          await livro.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
      };
    
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Livro excluido com sucesso"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir livro.` });
        }
    }

};

export default LivroController;
