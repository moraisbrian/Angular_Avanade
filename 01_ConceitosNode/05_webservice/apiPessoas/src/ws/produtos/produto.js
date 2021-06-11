const restful = require('node-restful');

const mongoose = restful.mongoose;

const produtoSchema = new mongoose.Schema({
    codigo: { type: Number, required: true },
    descricao: { type: String, required: true },
    unidade: { type: String, min: 2, max: 5 },
    preco: { type: Number, min: 0 },
    categoria: {
        type: String, uppercase: true,
        enum: ['INFORMATICA', 'VESTUARIO', 'ALIMENTACAO', 'HIGIENE',
            'CONSTRUCAO']
    }
});
module.exports = restful.model('produtos', produtoSchema);