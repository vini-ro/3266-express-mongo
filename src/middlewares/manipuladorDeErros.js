import mongoose from "mongoose";
import ErroBase from "../erros/erroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new erroValidacao(erro).enviarResposta(res);
    } else if (erro instanceof ErroBase) {
        erro.enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;