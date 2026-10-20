import "./publicar.css";
import marmitas from "../../dadosMockados/marmitas.js";
import categorias from "../../dadosMockados/categorias.js";
import { marmiteiroLogado } from "../../sessao/sessao.js";
import { normalizar, escaparHtml } from "../../util/texto.js";

function publicar(app) {
    const marmiteiro = marmiteiroLogado();

    // A validação é do próprio HTML: required, minlength, min, max, step.
    app.innerHTML = `
        <section class="publicar">
            <h1>Publicar cardápio do dia</h1>
            <p class="publicar-quem">Publicando como <strong>${escaparHtml(marmiteiro.nome)}</strong></p>

            <form class="form" id="form-publicar">
                <label class="form-campo">
                    <span>Nome do prato</span>
                    <input class="campo" type="text" name="titulo" required minlength="3" maxlength="60"
                           placeholder="Ex.: Frango grelhado com arroz e feijão">
                </label>

                <label class="form-campo">
                    <span>Tipo</span>
                    <select class="campo" name="categoria" required>
                        <option value="">Escolha…</option>
                        ${categorias.map(item => `<option value="${item.id}">${item.label}</option>`).join("")}
                    </select>
                </label>

                <label class="form-campo">
                    <span>Descrição</span>
                    <textarea class="campo" name="descricao" required minlength="10" maxlength="160" rows="3"
                              placeholder="Conte em uma frase o que vem na marmita"></textarea>
                </label>

                <label class="form-campo">
                    <span>Itens (separe por vírgula)</span>
                    <input class="campo" type="text" name="itens" required
                           placeholder="Arroz, feijão, frango grelhado">
                </label>

                <div class="form-linha">
                    <label class="form-campo">
                        <span>Preço (R$)</span>
                        <input class="campo" type="number" name="preco" required min="1" max="200" step="0.01">
                    </label>
                    <label class="form-campo">
                        <span>Taxa de entrega (R$)</span>
                        <input class="campo" type="number" name="taxaEntrega" required min="0" max="50" step="0.01" value="0">
                    </label>
                    <label class="form-campo">
                        <span>Tempo (min)</span>
                        <input class="campo" type="number" name="entregaMin" required min="5" max="180" step="1">
                    </label>
                </div>

                <p class="form-aviso" id="aviso" role="alert"></p>

                <button class="botao" type="submit">Publicar</button>
            </form>
        </section>
    `;

    const form = app.querySelector("#form-publicar");
    const aviso = app.querySelector("#aviso");

    form.addEventListener("submit", evento => {
        evento.preventDefault(); // o navegador já validou os campos antes de chegar aqui

        const dados = new FormData(form);
        const titulo = dados.get("titulo").trim();

        // find: recusa o mesmo prato publicado de novo pelo mesmo marmiteiro
        const repetida = marmitas.find(item =>
            item.publicadorId === marmiteiro.id && normalizar(item.titulo) === normalizar(titulo)
        );

        if (repetida) {
            aviso.textContent = "Você já publicou uma marmita com esse nome. Veja em Minha conta ou mude o nome.";
            return;
        }

        const novoId = Math.max(...marmitas.map(item => item.id)) + 1;

        marmitas.push({
            id: novoId,
            titulo,
            categoria: dados.get("categoria"),
            descricao: dados.get("descricao").trim(),
            itens: dados.get("itens").split(",").map(item => item.trim()).filter(item => item !== ""),
            preco: Number(dados.get("preco")),
            entregaMin: Number(dados.get("entregaMin")),
            taxaEntrega: Number(dados.get("taxaEntrega")),
            publicadorId: marmiteiro.id,
        });

        // navegação sempre pelo endereço
        window.location.hash = `#detalhe?id=${novoId}`;
    });
}

export default {
    url: "#publicar",
    label: "Publicar",
    icon: "circle-plus",
    pagina: publicar,
};
