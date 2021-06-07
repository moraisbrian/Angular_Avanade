/*
    Em um modulo chamado 'appmod01.js' escrever uma função que receba como parâmetros: dia, mes e ano

    Com base nessas informações, a função deve retornar o número de dias que faltam para terminar o ano em questão

    Em seguida, testar esta função aqui (appex01.js)

    Dica: usar a lista de meses do app02.js
*/

const fnDiasRestantes = require('./appmod01');

const dias = fnDiasRestantes(31, 12, 2020);

console.log(dias);