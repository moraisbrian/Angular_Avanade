// Função que recebe dois parâmetros numéricos e retorna sua soma
// Função nomeada
function calcularSoma(valor1, valor2) {
    if (typeof(valor1) !== 'number' || typeof(valor2) !== 'number')
        throw new Error('Os parâmetros devem ser numéricos');

    return valor1 + valor2;
}

exports.somar = calcularSoma;

// Função anônima
// Neste exemplo, a função recebe dois parametros e retorna o maior deles
exports.buscarMaior = function(a, b = 0) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number')
        throw new Error('Os parâmetros devem ser numéricos');

    return a > b ? a : b;
}

// Arrow function
// O parâmetro 's' deve ser uma string ou um array, pois somente estes possuem a propriedade length
exports.calcularTamanho = s => s.length;