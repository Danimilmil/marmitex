# Relatório · Marmita do Dia (rascunho)

> Rascunho para o grupo completar e exportar em PDF (3 a 5 páginas) para `docs/`.
> Trechos entre [colchetes] precisam ser escritos por vocês com o que realmente aconteceu.

## R1 · O problema e quem usa

**Pergunta do app:** qual marmita de hoje vale pedir, considerando preço e tempo de entrega?

O cardápio de marmita muda todo dia e quem quer almoçar não sabe o que tem antes de ligar para cada lugar. Quem cozinha anuncia em grupos de mensagem, e o anúncio se perde no dia seguinte.

Três situações de uso (ajustem com as palavras de vocês):
1. **Quem trabalha em escritório** tem 40 minutos de almoço, abre o app e filtra "Executiva", ordenando pela entrega mais rápida.
2. **Quem treina** procura "Fit" e compara o preço com entrega entre três opções.
3. **A marmiteira** publica o cardápio de hoje às 9h e confere em Minha conta o que já está no ar.

## R2 · O mapa de equivalência

| No KiOferta | No tema | Em Marmitas do dia |
|---|---|---|
| Produto | O que a pessoa procura | Um prato, como "frango grelhado com arroz e feijão" |
| Oferta | Registro publicado | O cardápio do dia de uma marmitaria |
| Mercado | Quem oferece / onde acontece | O marmiteiro e o bairro |
| Preço | Número que decide | Preço da marmita (e total com entrega) |
| Distância | Segundo critério | Tempo e taxa de entrega |
| Contribuinte | Quem publica e tem conta | Marmiteiro cadastrado |
| Visitante | Só consulta | Quem procura almoço |

## R3 · A estrutura

[Colar a árvore de arquivos do README e escrever uma linha por arquivo principal.]

## R4 · Três decisões e um descartado

Decisões já tomadas no código (confirmem com o grupo e escrevam o motivo com as palavras de vocês):
1. **Filtros no endereço** (`busca`, `categoria`, `ordem`): o F5 mantém o resultado e o link pode ser compartilhado.
2. **Ordenação padrão por preço com entrega**: a pergunta do app é "vale pedir?", e a taxa pesa tanto quanto o preço.
3. **`escaparHtml` em tudo que o usuário digita**: o texto vai para `innerHTML` e poderia quebrar a tela.

Descartado: [alternativa que o grupo realmente considerou e por que não ficou].

## R5 · A divisão de tarefas

[Tabela do README preenchida, com os números dos commits.]

## R6 · Duas dificuldades reais

[Erro que apareceu, o que acharam que era, o que era de fato. Escrevam só o que aconteceu de verdade.]

## R7 · O que ficou de fora

- Login de verdade: a conta é um usuário fixo (`sessao.js`).
- Persistência: o que se publica some no F5.
- Pedido e pagamento: o botão leva ao WhatsApp do marmiteiro.
- [Outras lacunas que o grupo identificar.]

## Capturas (360px)

Início · Resultados · Detalhe · Publicar · Minha conta · Rota inexistente · estado vazio da busca
