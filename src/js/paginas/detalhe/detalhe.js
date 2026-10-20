import "./detalhe.css";
import marmitas from "../../dadosMockados/marmitas.js";
import marmiteiros from "../../dadosMockados/marmiteiros.js";
import categorias from "../../dadosMockados/categorias.js";
import { escaparHtml, moeda } from "../../util/texto.js";

function detalhe(app, params) {
    // o id chega como texto no endereço; find compara número com número
    const id = Number(params.get("id"));
    const marmita = marmitas.find(item => item.id === id);

    if (!marmita) {
        app.innerHTML = `
            <section class="detalhe">
                <div class="estado-vazio">
                    <i data-lucide="search-x"></i>
                    <p>Não encontramos essa marmita. Ela pode ter sido removida.</p>
                    <a class="botao-secundario" href="#resultados">Ver todas as marmitas</a>
                </div>
            </section>
        `;
        return;
    }

    const marmiteiro = marmiteiros.find(item => item.id === marmita.publicadorId);
    const categoria = categorias.find(item => item.id === marmita.categoria);
    const total = marmita.preco + marmita.taxaEntrega;
    const mensagem = encodeURIComponent(`Olá! Vi "${marmita.titulo}" no Marmita do Dia.`);

    app.innerHTML = `
        <section class="detalhe">
            <a class="detalhe-voltar" href="#resultados">
                <i data-lucide="chevron-left"></i>
                <span>Voltar</span>
            </a>

            <div class="detalhe-cabecalho">
                <h1>${escaparHtml(marmita.titulo)}</h1>
                <p class="detalhe-categoria">${categoria ? categoria.label : marmita.categoria}</p>
            </div>

            <ul class="detalhe-dados">
                <li class="dado">
                    <span class="dado-rotulo">Marmita</span>
                    <strong>${moeda(marmita.preco)}</strong>
                </li>
                <li class="dado">
                    <span class="dado-rotulo">Entrega</span>
                    <strong>${marmita.taxaEntrega === 0 ? "Grátis" : moeda(marmita.taxaEntrega)}</strong>
                </li>
                <li class="dado">
                    <span class="dado-rotulo">Tempo</span>
                    <strong>${marmita.entregaMin} min</strong>
                </li>
                <li class="dado">
                    <span class="dado-rotulo">Total</span>
                    <strong>${moeda(total)}</strong>
                </li>
            </ul>

            <div class="detalhe-bloco">
                <h2>O que vem</h2>
                <p>${escaparHtml(marmita.descricao)}</p>
                <ul class="detalhe-itens">
                    ${marmita.itens.map(item => `<li>${escaparHtml(item)}</li>`).join("")}
                </ul>
            </div>

            <div class="detalhe-bloco">
                <h2>Quem publicou</h2>
                <p><strong>${escaparHtml(marmiteiro ? marmiteiro.nome : "Marmiteiro")}</strong></p>
                <p class="detalhe-categoria">${escaparHtml(marmiteiro ? marmiteiro.bairro : "")}</p>
            </div>

            ${marmiteiro ? `
                <a class="botao" href="https://wa.me/${marmiteiro.whatsapp}?text=${mensagem}">
                    <i data-lucide="phone"></i>
                    <span>Pedir pelo WhatsApp</span>
                </a>
            ` : ""}
        </section>
    `;
}

export default {
    url: "#detalhe",
    label: "",
    icon: "",
    pagina: detalhe,
};
