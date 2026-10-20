import inicio from "../paginas/inicio/inicio.js";
import resultados from "../paginas/resultados/resultados.js";
import detalhe from "../paginas/detalhe/detalhe.js";
import publicar from "../paginas/publicar/publicar.js";
import conta from "../paginas/conta/conta.js";
import naoEncontrada from "../paginas/naoEncontrada/naoEncontrada.js";

// A lista única de telas. A ordem aqui é a ordem do menu.
// Tela com label vazio não aparece no menu.
const rotas = [
    inicio,
    resultados,
    publicar,
    conta,
    detalhe,
    naoEncontrada,
];

export { rotas };
