/*
    Exercício: caixa eletronico

    Um caixa eletronico possui as cédulas:

    5, 10, 20 e 50 reais.

    Com base em um valor de saque informado, apresentar o número de cédulas

    Ex.: Saque R$ 135,00
        Nota de 50: 2
        Nota de 20: 1,
        Nota de 10: 1,
        Nota de 5: 1

    Dica: usar módulo (%) e divisão inteira.
*/

const fnCaixaEletronico = require('./appmod02');

const cedulas = fnCaixaEletronico(135);
console.log(cedulas);