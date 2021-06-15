const restful = require('node-restful');

const mongoose = restful.mongoose;

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    dataNascimento: { type: Date },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    produtos: { type: [String] }
});

module.exports = restful.model('cliente', clienteSchema);