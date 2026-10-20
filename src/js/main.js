import { createIcons, icons } from "lucide";
import { rotas } from "./rotas/rotas.js";
import { renderNavbar, marcarAtiva } from "./navbar/navbar.js";

const app = document.querySelector("#app");

renderNavbar(rotas);

function renderApp() {
    const hash = window.location.hash || "#inicio";

    // "#detalhe?id=3" vira a tela "#detalhe" e o parâmetro id=3
    const [url, query] = hash.split("?");
    const params = new URLSearchParams(query);

    const rota = rotas.find(tela => tela.url === url);

    if (rota) {
        rota.pagina(app, params);
    } else {
        // find devolveu undefined: o endereço não existe
        const naoEncontrada = rotas.find(tela => tela.url === "#404");
        naoEncontrada.pagina(app, params);
    }

    marcarAtiva(url);
    createIcons({ icons }); // depois de CADA render, não só no carregamento
    window.scrollTo(0, 0);
}

window.addEventListener("hashchange", renderApp);

renderApp();
