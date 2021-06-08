import { Documento } from './documento';

export class DocCpf extends Documento {

    constructor() {
        super();
        this._digitos = 11;
    }

    public exibir(): string {
        return `Número do CPF: ${this.numero}`;
    }
}