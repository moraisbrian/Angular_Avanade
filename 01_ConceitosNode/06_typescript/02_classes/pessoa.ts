import { Documento } from '../03_classes_abstratas/documento';
import { Sexo } from './sexo';

export class Pessoa {
    // Atributos
    private _nome: string;
    private _idade: number;
    private _sexo: Sexo;
    private _doc : Documento;

    // Propriedades
    public set nome(nome: string) {
        this._nome = nome;
    }
    public get nome(): string {
        return this._nome;
    }

    public set idade(idade: number) {
        if (idade < 0) 
            throw new Error('A idade não pode ser negativa');

        this._idade = idade;
    }
    public get idade(): number {
        return this._idade;
    }

    public set sexo(sexo: Sexo) {
        this._sexo = sexo;
    }
    public get sexo(): Sexo {
        return this._sexo;
    }

    public get doc() : Documento {
        return this._doc;
    }
    public set doc(doc : Documento) {
        this._doc = doc;
    }
    
    // Métodos
    public exibir(): string {
        return `Nome: ${this.nome}\n Idade: ${this.idade}\n Sexo: ${this.sexo}\n Documento: ${this.doc.exibir()}`;
    }
}