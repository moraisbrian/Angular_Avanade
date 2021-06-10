export class Salario {
  constructor() {
    this.valor = 0;
  }

  public valor: number;

  public calcular(): number {
    return this.valor * 10 / 100;
  }
}
