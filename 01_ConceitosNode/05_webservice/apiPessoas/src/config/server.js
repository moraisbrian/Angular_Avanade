const express = require('express');
const allowCors = require('./cors');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(allowCors);

server.listen(3200, () => console.log('Server on'));

module.exports = server;
