const express = require('express');

module.exports = (server) => {
    const router = express.Router();

    server.use('/api', router);

    const Contatos = require('../ws/contatos/contatoService');
    Contatos.register(router, '/contatos');
};