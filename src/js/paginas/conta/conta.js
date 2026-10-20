import "./conta.css";
import marmitas from "../../dadosMockados/marmitas.js";
import { usuarioLogado, marmiteiroLogado } from "../../sessao/sessao.js";
import { escaparHtml } from "../../util/texto.js";
import { cardMarmita } from "../compartilhado/cardMarmita.js";

function conta(app) {
    const usuario = usuarioLogado();
    const marmiteiro = marmiteiroLogado();

    // filter: só o que este usuário publicou
    const minhas = marmitas.filter(marmita => marmita.publicadorId === usuario.marmiteiroId);

    app.innerHTML = `
        <section class="conta">
            <div class="conta-perfil">
                <i data-lucide="user-round"></i>
                <div class="conta-dados">
                    <h1>${escaparHtml(usuario.nome)}</h1>
                    <p>${escaparHtml(usuario.email)}</p>
                    <p>${escaparHtml(marmiteiro.nome)} · ${escaparHtml(marmiteiro.bairro)}</p>
                </div>
            </div>

            <h2>Minhas marmitas (${minhas.length})</h2>

            ${minhas.length === 0
                ? `
                    <div class="estado-vazio">
                        <i data-lucide="chef-hat"></i>
                        <p>Você ainda não publicou nenhuma marmita.</p>
                        <a class="botao" href="#publicar">Publicar a primeira</a>
                    </div>
                `
                : `
                    <ul class="lista-cards">${minhas.map(cardMarmita).join("")}</ul>
                    <a class="botao" href="#publicar">Publicar nova marmita</a>
                `
            }
        </section>
    `;
}

export default {
    url: "#conta",
    label: "Conta",
    icon: "user",
    pagina: conta,
};
