// Cada registro é o cardápio do dia de um marmiteiro.
// publicadorId = id do marmiteiro que publicou (ver marmiteiros.js).
const marmitas = [
    { id: 1, titulo: "Frango grelhado com arroz e feijão", categoria: "tradicional", descricao: "O prato do dia a dia, bem temperado e sempre quentinho.", itens: ["Filé de frango grelhado", "Arroz", "Feijão", "Salada de alface e tomate"], preco: 18.0, entregaMin: 35, taxaEntrega: 3.0, publicadorId: 1 },
    { id: 2, titulo: "Feijoada completa", categoria: "tradicional", descricao: "Feijoada de quarta-feira com todos os acompanhamentos.", itens: ["Feijoada", "Arroz", "Couve refogada", "Farofa", "Laranja"], preco: 24.0, entregaMin: 45, taxaEntrega: 4.0, publicadorId: 1 },
    { id: 3, titulo: "Strogonoff de frango com batata palha", categoria: "tradicional", descricao: "Strogonoff cremoso, arroz soltinho e batata palha crocante.", itens: ["Strogonoff de frango", "Arroz", "Batata palha"], preco: 19.5, entregaMin: 40, taxaEntrega: 3.0, publicadorId: 1 },
    { id: 4, titulo: "Bife acebolado com purê", categoria: "carnes", descricao: "Bife macio com cebola dourada e purê de batata caseiro.", itens: ["Bife acebolado", "Purê de batata", "Arroz", "Feijão"], preco: 22.0, entregaMin: 40, taxaEntrega: 3.5, publicadorId: 1 },
    { id: 5, titulo: "Omelete de legumes com quinoa", categoria: "fit", descricao: "Leve e proteica, sem frituras.", itens: ["Omelete de legumes", "Quinoa", "Mix de folhas"], preco: 21.0, entregaMin: 30, taxaEntrega: 0, publicadorId: 2 },
    { id: 6, titulo: "Salmão com legumes assados", categoria: "fit", descricao: "Salmão grelhado com abobrinha, cenoura e brócolis assados.", itens: ["Salmão grelhado", "Legumes assados", "Arroz integral"], preco: 32.0, entregaMin: 40, taxaEntrega: 4.0, publicadorId: 2 },
    { id: 7, titulo: "Frango com batata-doce", categoria: "fit", descricao: "Clássico de quem treina: frango desfiado e batata-doce assada.", itens: ["Frango grelhado", "Batata-doce", "Brócolis no vapor"], preco: 20.0, entregaMin: 25, taxaEntrega: 2.5, publicadorId: 2 },
    { id: 8, titulo: "Moqueca de palmito", categoria: "vegetariana", descricao: "Moqueca cremosa com leite de coco, sem nenhum ingrediente animal.", itens: ["Moqueca de palmito", "Arroz", "Pirão", "Farofa de dendê"], preco: 23.0, entregaMin: 45, taxaEntrega: 3.0, publicadorId: 3 },
    { id: 9, titulo: "Escondidinho de lentilha", categoria: "vegetariana", descricao: "Camada de lentilha refogada coberta com purê gratinado.", itens: ["Escondidinho de lentilha", "Salada de rúcula"], preco: 20.0, entregaMin: 35, taxaEntrega: 0, publicadorId: 3 },
    { id: 10, titulo: "Risoto de abóbora e cogumelos", categoria: "vegetariana", descricao: "Risoto cremoso feito na hora.", itens: ["Risoto de abóbora", "Cogumelos salteados", "Salada verde"], preco: 26.0, entregaMin: 50, taxaEntrega: 4.5, publicadorId: 3 },
    { id: 11, titulo: "Macarrão ao sugo com legumes", categoria: "massas", descricao: "Molho de tomate caseiro com legumes frescos.", itens: ["Macarrão", "Molho sugo", "Legumes salteados"], preco: 17.0, entregaMin: 30, taxaEntrega: 2.0, publicadorId: 3 },
    { id: 12, titulo: "Executiva de tilápia", categoria: "executiva", descricao: "Embalagem pensada para o horário de almoço no escritório.", itens: ["Filé de tilápia", "Arroz", "Legumes", "Salada"], preco: 25.0, entregaMin: 25, taxaEntrega: 0, publicadorId: 2 },
    { id: 13, titulo: "Lasanha à bolonhesa", categoria: "massas", descricao: "Lasanha de forno com molho bolonhesa e queijo gratinado.", itens: ["Lasanha à bolonhesa", "Salada de alface"], preco: 21.0, entregaMin: 45, taxaEntrega: 3.0, publicadorId: 1 },
    { id: 14, titulo: "Yakisoba vegetariano", categoria: "massas", descricao: "Macarrão oriental salteado com legumes e shoyu.", itens: ["Yakisoba de legumes", "Cenoura em tiras"], preco: 22.0, entregaMin: 35, taxaEntrega: 3.5, publicadorId: 3 },
    { id: 15, titulo: "Executiva de contrafilé", categoria: "executiva", descricao: "Contrafilé grelhado com farofa e vinagrete.", itens: ["Contrafilé grelhado", "Arroz", "Farofa", "Vinagrete"], preco: 28.0, entregaMin: 30, taxaEntrega: 3.0, publicadorId: 2 },
];

export default marmitas;
