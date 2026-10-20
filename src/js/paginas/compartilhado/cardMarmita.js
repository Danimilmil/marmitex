import "./cardMarmita.css";
import marmiteiros from "../../dadosMockados/marmiteiros.js";
import { escaparHtml, moeda } from "../../util/texto.js";

// Um card de marmita, usado por Resultados e Minha conta.
// Devolve uma string de <li>; quem chama faz .map(cardMarmita).join("").
function cardMarmita(marmita) {
    const marmiteiro = marmiteiros.find(m => m.id === marmita.publicadorId);
    const entrega = marmita.taxaEntrega === 0
        ? "Entrega grátis"
        : `Entrega ${moeda(marmita.taxaEntrega)}`;

    return `
        <li>
            <a class="card" href="#detalhe?id=${marmita.id}">
                <div class="card-topo">
                    <h2 class="card-titulo">${escaparHtml(marmita.titulo)}</h2>
                    <strong class="card-preco">${moeda(marmita.preco)}</strong>
                </div>
                <p class="card-marmitaria">${escaparHtml(marmiteiro ? marmiteiro.nome : "Marmiteiro")}</p>
                <p class="card-meta">
                    <i data-lucide="clock"></i>
                    <span>${marmita.entregaMin} min · ${entrega}</span>
                </p>
            </a>
        </li>
    `;
}

export { cardMarmita };
