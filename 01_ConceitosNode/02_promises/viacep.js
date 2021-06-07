const cep = '13224430';
const url = `https://viacep.com.br/ws/${cep}/json/`;

let resposta = {};

fetch(url)
    .then(res => {
        const x = res.json();
        return x;
    })
    .then(valor => {
        resposta = valor;
        console.log(resposta.logradouro);
        console.log(resposta.bairro);
        console.log(resposta.localidade);
        console.log(resposta.uf);
    });