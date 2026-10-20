import "./resultados.css";
import marmitas from "../../dadosMockados/marmitas.js";
import marmiteiros from "../../dadosMockados/marmiteiros.js";
import categorias from "../../dadosMockados/categorias.js";
import { normalizar, escaparHtml } from "../../util/texto.js";
import { cardMarmita } from "../compartilhado/cardMarmita.js";

// Critérios de ordenação que a pessoa escolhe (bônus do desafio).
const ordens = {
    total: { label: "Menor preço com entrega", comparar: (a, b) => (a.preco + a.taxaEntrega) - (b.preco + b.taxaEntrega) },
    preco: { label: "Menor preço da marmita", comparar: (a, b) => a.preco - b.preco },
    entrega: { label: "Entrega mais rápida", comparar: (a, b) => a.entregaMin - b.entregaMin },
};
const ORDEM_PADRAO = "total";

// Monta o endereço desta tela com os filtros que estiverem preenchidos.
function montarHash({ busca, categoria, ordem }) {
    const params = new URLSearchParams();
    if (busca) params.set("busca", busca);
    if (categoria) params.set("categoria", categoria);
    if (ordem && ordem !== ORDEM_PADRAO) params.set("ordem", ordem);
    const query = params.toString();
    return query ? `#resultados?${query}` : "#resultados";
}

function resultados(app, params) {
    const busca = (params.get("busca") ?? "").trim();
    const categoria = params.get("categoria") ?? "";
    const ordemPedida = params.get("ordem") ?? ORDEM_PADRAO;
    const ordem = ordens[ordemPedida] ? ordemPedida : ORDEM_PADRAO;

    const termo = normalizar(busca);

    // filter: categoria E termo funcionam juntos
    const encontradas = marmitas
        .filter(marmita => {
            const marmiteiro = marmiteiros.find(m => m.id === marmita.publicadorId);
            const texto = normalizar(
                `${marmita.titulo} ${marmita.descricao} ${marmita.itens.join(" ")} ${marmiteiro ? marmiteiro.nome : ""}`
            );
            const bateCategoria = !categoria || marmita.categoria === categoria;
            const bateTermo = !termo || texto.includes(termo);
            return bateCategoria && bateTermo;
        })
        .sort(ordens[ordem].comparar);

    app.innerHTML = `
        <section class="resultados">
            <h1>Marmitas de hoje</h1>

            <form class="resultados-busca" id="form-busca" role="search">
                <input
                    class="campo resultados-input"
                    type="search"
                    id="input-busca"
                    name="busca"
                    value="${escaparHtml(busca)}"
                    placeholder="Prato, ingrediente ou marmitaria"
                    aria-label="Buscar marmita"
                >
                <button class="botao" type="submit" aria-label="Buscar">
                    <i data-lucide="search"></i>
                </button>
            </form>

            <ul class="chips">
                <li>
                    <a class="chip" href="${escaparHtml(montarHash({ busca, categoria: "", ordem }))}"
                       ${categoria === "" ? 'aria-current="true"' : ""}>Todas</a>
                </li>
                ${categorias.map(item => `
                    <li>
                        <a class="chip" href="${escaparHtml(montarHash({ busca, categoria: item.id, ordem }))}"
                           ${categoria === item.id ? 'aria-current="true"' : ""}>${item.label}</a>
                    </li>
                `).join("")}
            </ul>

            <div class="resultados-barra">
                <p class="resultados-contagem">
                    ${encontradas.length} ${encontradas.length === 1 ? "marmita" : "marmitas"}
                </p>
                <label class="resultados-ordem">
                    <span>Ordenar</span>
                    <select class="campo" id="select-ordem">
                        ${Object.entries(ordens).map(([id, item]) => `
                            <option value="${id}" ${id === ordem ? "selected" : ""}>${item.label}</option>
                        `).join("")}
                    </select>
                </label>
            </div>

            ${encontradas.length === 0
                ? `
                    <div class="estado-vazio">
                        <i data-lucide="search-x"></i>
                        <p>Nenhuma marmita encontrada para esse filtro.</p>
                        <a class="botao-secundario" href="#resultados">Limpar filtros</a>
                    </div>
                `
                : `<ul class="lista-cards">${encontradas.map(cardMarmita).join("")}</ul>`
            }
        </section>
    `;

    // Os controles só escrevem o endereço; o hashchange redesenha a tela.
    app.querySelector("#form-busca").addEventListener("submit", evento => {
        evento.preventDefault();
        const novaBusca = app.querySelector("#input-busca").value.trim();
        window.location.hash = montarHash({ busca: novaBusca, categoria, ordem });
    });

    app.querySelector("#select-ordem").addEventListener("change", evento => {
        window.location.hash = montarHash({ busca, categoria, ordem: evento.target.value });
    });
}

export default {
    url: "#resultados",
    label: "Marmitas",
    icon: "utensils",
    pagina: resultados,
};
