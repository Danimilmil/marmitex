import "./navbar.css";

// O menu é gerado da lista de rotas: nenhum item escrito à mão no HTML.
function renderNavbar(rotas) {
    const nav = document.querySelector("#navbar");

    if (!nav) return;

    nav.innerHTML = `
        <nav class="navbar" aria-label="Menu principal">
            <ul class="navbar-lista">
                ${rotas
                    .filter(rota => rota.label !== "")
                    .map(rota => `
                        <li class="navbar-item">
                            <a href="${rota.url}" class="nav-link" data-url="${rota.url}">
                                <i data-lucide="${rota.icon}"></i>
                                <span>${rota.label}</span>
                            </a>
                        </li>
                    `)
                    .join("")}
            </ul>
        </nav>
    `;
}

// Marca o item da tela atual (a tela de detalhe conta como "Marmitas").
function marcarAtiva(url) {
    const alvo = url === "#detalhe" ? "#resultados" : url;

    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.dataset.url === alvo) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

export { renderNavbar, marcarAtiva };
