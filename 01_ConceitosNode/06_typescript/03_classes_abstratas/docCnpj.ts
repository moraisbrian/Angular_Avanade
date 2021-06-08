import { Documento } from './documento';

export class DocCnpj extends Documento {

    constructor() {
        super();
        this._digitos = 14;
    }

    public exibir(): string {
        return `Número do CNPJ: ${this.numero}`;
    }
}