import livro from '../models/livroModel.js';

class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await Livros.find({});
    res.status(200).json(listaLivros);
    }

};

export default LivroController;
