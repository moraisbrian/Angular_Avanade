import { Injectable } from "@angular/core";
import { Funcionario } from "../classes/funcionario.classe";

@Injectable()
export class FuncionarioService {
  public listaFuncionarios(): Funcionario[] {
    return [
      { nome: 'Pedro', idade: 23 },
      { nome: 'Marina', idade: 25 },
      { nome: 'Lucelia', idade: 42 },
    ]
  }
}
