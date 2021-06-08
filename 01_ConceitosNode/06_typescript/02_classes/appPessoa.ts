import { Pessoa } from './pessoa';
import { Sexo } from './sexo';
import { DocCpf } from '../03_classes_abstratas/docCpf';
import { Documento } from '../03_classes_abstratas/documento';

try {
    const pessoa: Pessoa = new Pessoa();
    pessoa.nome = 'Fulano';
    pessoa.idade = 10;
    pessoa.sexo = Sexo.MASCULINO;
    
    const cpf: Documento = new DocCpf();
    cpf.numero = '12345678945';
    pessoa.doc = cpf;

    console.log(pessoa.exibir());
} catch (error) {
    console.log(error.message);
}