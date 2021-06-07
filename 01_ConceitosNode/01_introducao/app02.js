// Usando listas - parte 1
// Criar um array contendo os dias de cada mes do ano

const ano = 2020;
const meses = [31, ano % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(meses);