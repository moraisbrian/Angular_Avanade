const colecoes = require('./listas/listaDados');

const input = process.argv[2];
const lista = colecoes.nomes.filter(item => item.includes(input));
console.log(lista);

const dados = colecoes.nomes.map((valor, indice) => {
    return indice + ': ' + valor; 
});
console.log(dados);