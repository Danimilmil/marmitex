# Marmita do Dia

**Tema sorteado:** Marmitas do dia (Desafio 1 · O mesmo esqueleto, outro negócio)

**Integrantes:**
- Integrante A: _nome_ (dados e descoberta)
- Integrante B: _nome_ (detalhe e publicação)
- Integrante C: _nome_ (conta e fundação)

**A pergunta que o app responde:** qual marmita de hoje vale pedir, considerando preço e tempo de entrega?

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar e use o DevTools em 360px de largura.

## Telas e endereços

| Tela | Endereço | No menu |
|---|---|---|
| Início | `#inicio` | sim |
| Resultados | `#resultados?busca=frango&categoria=fit&ordem=entrega` | sim (Marmitas) |
| Detalhe | `#detalhe?id=3` | não |
| Publicar | `#publicar` | sim |
| Minha conta | `#conta` | sim |
| Rota inexistente | qualquer endereço que não exista | não |

## Estrutura

```
src/
├── index.html
├── css/ tokens.css · base.css · style.css
└── js/
    ├── main.js                roteador (hashchange, split("?"), find)
    ├── rotas/rotas.js         lista única de telas
    ├── navbar/                menu gerado da lista de rotas (+ navbar.css)
    ├── sessao/sessao.js       usuário "logado" fixo
    ├── util/texto.js          normalizar, escaparHtml, moeda
    ├── dadosMockados/         marmitas (15), marmiteiros (4), usuarios (4), categorias
    └── paginas/               uma pasta por tela, cada uma com o seu .css
        └── compartilhado/     card de marmita usado por Resultados e Minha conta
```

## Dicas

- Para ver outra conta, troque `USUARIO_LOGADO_ID` em `src/js/sessao/sessao.js`.
  O usuário 4 não publicou nada e mostra o estado vazio de Minha conta.
- Os dados ficam em memória: o que for publicado some no F5 (é esperado neste desafio).

## Divisão de tarefas

Preencher com os números dos commits de cada integrante (tem que bater com o `git log`).

| Integrante | Responsabilidade | Commits |
|---|---|---|
| A | | |
| B | | |
| C | | |
