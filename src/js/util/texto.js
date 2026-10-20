// Funções pequenas de texto usadas por mais de uma tela.

// "Salmão" e "salmao" viram a mesma coisa na hora de comparar.
function normalizar(texto) {
    return String(texto ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// Tudo que o usuário digita e vai para dentro de innerHTML passa por aqui.
function escaparHtml(texto) {
    return String(texto ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function moeda(valor) {
    return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export { normalizar, escaparHtml, moeda };
