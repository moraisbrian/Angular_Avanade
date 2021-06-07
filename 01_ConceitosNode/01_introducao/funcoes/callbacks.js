exports.executar = function(callback) {
    return callback('Kasolution - Avanade');
}

// O parâmetro 'lista' representa uma lista de nomes (string)
// A função callback recebe um nome como parametro e retorna true ou false, se este nome combinar com o criterio usado
exports.buscar = function(lista, callback) {
    let sublista = [];

    for (let i = 0; i < lista.length; i++) {
        if (callback(lista[i])) {
            sublista.push(lista[i]);
        }
    }

    return sublista;
}