export class Cliente {
  constructor(
    public nome: string,
    public dataNascimento: Date,
    public cpf: string,
    public email: string,
    public produtos: string[],
    public _id?: string
  ) {}
}
