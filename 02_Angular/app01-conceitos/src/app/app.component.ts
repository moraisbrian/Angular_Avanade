import { Component, OnInit } from '@angular/core';
import { Funcionario } from './classes/funcionario.classe';
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.listar();
  }

  // Exemplo 01 - binding unidirecional (componente -> template)
  public rnd: number = Math.random();

  // Exemplo 02 - gerando uma lista de funcionarios -> template
  public funcionarios: Funcionario[] = [];

  public listar() {
    this.funcionarios = this.funcionarioService.listaFuncionarios();
  }

  public nomeFuncionario: string = '';

  public mostrar(nome: string): void {
    this.nomeFuncionario = nome;
  }
}
