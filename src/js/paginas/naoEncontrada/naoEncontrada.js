import "./naoEncontrada.css";
import { escaparHtml } from "../../util/texto.js";

function naoEncontrada(app) {
    app.innerHTML = `
        <section class="nao-encontrada">
            <i data-lucide="map-pin-off"></i>
            <h1>Esse endereço não existe</h1>
            <p>Não achamos nenhuma tela em <strong>${escaparHtml(window.location.hash)}</strong>.</p>
            <a class="botao" href="#inicio">Voltar ao início</a>
        </section>
    `;
}

export default {
    url: "#404",
    label: "",
    icon: "",
    pagina: naoEncontrada,
};
