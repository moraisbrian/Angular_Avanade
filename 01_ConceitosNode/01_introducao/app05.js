const fn = require('./funcoes/callbacks');

// Trabalhando com a função 'executar'
const res1 = fn.executar(function(item) { 
    return item.length; 
});
console.log(res1);

const res2 = fn.executar(function(item) {
    return item === 'Kasolution';
});
console.log(res2);

const res3 = fn.executar(function(item) {
    return item.toUpperCase();
});
console.log(res3);

const res4 = fn.executar(function(item) {
    return [item.length, item.toUpperCase(), item === 'Kasolution']
});
console.log(res4);

// Trabalhando com a função buscar
const nomes = ['Jonas', 'João', 'Denis', 'Daniela', 'Ana Paula', 'Luciana'];

// Condição 1: Nomes que terminam com a letra 'a'
const resposta = fn.buscar(nomes, item => item.endsWith('a'));
console.log('(Sublista):', resposta);