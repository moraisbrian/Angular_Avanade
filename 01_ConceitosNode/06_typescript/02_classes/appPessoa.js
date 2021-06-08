"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var sexo_1 = require("./sexo");
var docCpf_1 = require("../03_classes_abstratas/docCpf");
try {
    var pessoa = new pessoa_1.Pessoa();
    pessoa.nome = 'Fulano';
    pessoa.idade = 10;
    pessoa.sexo = sexo_1.Sexo.MASCULINO;
    var cpf = new docCpf_1.DocCpf();
    cpf.numero = '12345678945';
    pessoa.doc = cpf;
    console.log(pessoa.exibir());
}
catch (error) {
    console.log(error.message);
}
