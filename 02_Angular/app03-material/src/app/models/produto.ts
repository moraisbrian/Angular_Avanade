export class Produto {
  constructor(
    public codigo: number,
    public descricao: string,
    public unidade: string,
    public preco: number,
    public categoria: string,
    public _id?: string
  ) {}
}
