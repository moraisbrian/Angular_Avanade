const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
    const url_params = url.parse(request.url);
    const caminho = url_params.pathname;

    fs.readFile(__dirname + caminho, (erro, conteudo) => {
        if (erro) {
            response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
            response.write('<h1>Página não encontrada</h1>');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(conteudo);
        }
        response.end();
    });
});

server.listen(3000, () => console.log('Servidor no ar'));