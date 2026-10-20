import "./inicio.css";
import categorias from "../../dadosMockados/categorias.js";

function inicio(app) {
    app.innerHTML = `
        <section class="inicio">
            <h1>Marmita do Dia</h1>
            <p class="inicio-pergunta">Qual marmita de hoje vale pedir?</p>

            <form class="inicio-busca" id="form-busca" role="search">
                <input
                    class="campo inicio-input"
                    type="search"
                    id="input-busca"
                    name="busca"
                    placeholder="Prato, ingrediente ou marmitaria"
                    aria-label="Buscar marmita"
                >
                <button class="botao" type="submit" aria-label="Buscar">
                    <i data-lucide="arrow-right"></i>
                </button>
            </form>

            <div class="inicio-categorias">
                <p class="inicio-rotulo">Ou escolha pelo tipo</p>
                <ul class="chips">
                    ${categorias.map(categoria => `
                        <li>
                            <a class="chip" href="#resultados?categoria=${categoria.id}">
                                <i data-lucide="${categoria.icon}"></i>
                                <span>${categoria.label}</span>
                            </a>
                        </li>
                    `).join("")}
                </ul>
            </div>
        </section>
    `;

    // O termo digitado vai para o endereço; a tela de resultados se desenha sozinha.
    app.querySelector("#form-busca").addEventListener("submit", evento => {
        evento.preventDefault();
        const termo = app.querySelector("#input-busca").value.trim();
        window.location.hash = termo
            ? `#resultados?busca=${encodeURIComponent(termo)}`
            : "#resultados";
    });
}

export default {
    url: "#inicio",
    label: "Início",
    icon: "house",
    pagina: inicio,
};
