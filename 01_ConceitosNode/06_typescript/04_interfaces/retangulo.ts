import { IFigura } from "./figura";

export class Retangulo implements IFigura {

    public base: number;
    public altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    public calcularArea(): number {
        return this.base * this.altura;
    }
}