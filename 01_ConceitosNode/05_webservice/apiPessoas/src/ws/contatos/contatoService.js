const Contato = require('./contato');

Contato.methods(['get', 'post', 'put', 'delete']);
Contato.updateOptions({ new: true, runValidators: true });

module.exports = Contato;