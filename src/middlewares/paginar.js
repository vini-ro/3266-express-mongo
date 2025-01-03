import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";

async function paginar(req, res, next) {
    try {
        let { limite = 5, pagina = 1, camordenacao = "_id: -1" } = req.query;
        
        let [campOrdenacao, ordem] = ordenacao.split(":");
        
        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ordem = parseInt(ordem);

        const resultado = req.resultado;
        
        if (limite > 0 && pagina > 0) {
            
            const livrosResultado = await resultado.find()
            .sort({ [campOrdenacao]: ordem})
            .skip((pagina - 1) * limite)
            .limite(limite) 
            .populate("autor")
            .exec();
            
            res.status(200).json(livrosResultado);
        } else {
            next(new RequisicaoIncorreta());
        }
        
    } catch (error) {
        next(error);
    }
}

export default paginar;