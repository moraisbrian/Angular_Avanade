module.exports = function() {
    return {
        nome: 'José',
        idade: 45,
        apresentar: function() {
            return `Nome: ${this.nome}, Idade: ${this.idade}`;
        }
    };
}