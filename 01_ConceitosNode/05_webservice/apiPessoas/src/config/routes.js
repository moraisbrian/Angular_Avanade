const express = require('express');

module.exports = (server) => {
    const router = express.Router();

    server.use('/api', router);

    const Contatos = require('../ws/contatos/contatoService');
    Contatos.register(router, '/contatos');

    const Produtos = require('../ws/produtos/produtoService');
    Produtos.register(router, '/produtos');

    const Clientes = require('../ws/clientes/clienteService');
    Clientes.register(router, '/clientes');
};