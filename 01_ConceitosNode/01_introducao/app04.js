// Funções definidas no módulo apiFuncoes.js
const fn = require('./funcoes/apiFuncoes');

const soma1 = fn.somar(3, 5);
console.log(soma1);

let maior = fn.buscarMaior(10, 20);
console.log('Maior valor: ', maior);

maior = fn.buscarMaior(10);
console.log('Maior valor: ', maior);

let tamanho = fn.calcularTamanho('texto cujo tamanho deve ser calculado');
console.log('O parâmetro informado possui', tamanho, 'caracteres');