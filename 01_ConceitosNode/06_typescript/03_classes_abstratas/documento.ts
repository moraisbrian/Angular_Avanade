export abstract class Documento {
    private _numero: string;
    protected _digitos: number;

    public set numero(numero: string) {
        if (numero.length !== this._digitos) 
            throw new Error('Quantidade de dígitos inválida para este documento');

        this._numero = numero;
    }
    public get numero(): string {
        return this._numero;
    }

    abstract exibir(): string;
}