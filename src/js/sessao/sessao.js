import usuarios from "../dadosMockados/usuarios.js";
import marmiteiros from "../dadosMockados/marmiteiros.js";

// Não há login de verdade: este é o usuário "logado".
// Troque o número (1 a 4) para ver outra conta. O usuário 4 não publicou nada
// e serve para testar o estado vazio da tela Minha conta.
const USUARIO_LOGADO_ID = 1;

function usuarioLogado() {
    return usuarios.find(usuario => usuario.id === USUARIO_LOGADO_ID);
}

function marmiteiroLogado() {
    const usuario = usuarioLogado();
    return marmiteiros.find(marmiteiro => marmiteiro.id === usuario.marmiteiroId);
}

export { usuarioLogado, marmiteiroLogado };
