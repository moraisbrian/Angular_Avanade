import { Component, OnInit } from '@angular/core';
import { Funcionario } from './classes/funcionario.classe';
import { Salario } from './classes/salario.classe';
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

  // Exemplo 03 - listas com filtros
  public filtrar(event: string): void {
    this.listar();
    this.funcionarios = this.funcionarios
      .filter(f => f.nome.toLowerCase().includes(event.toLowerCase()));
  }

  // Exemplo 04 - binding bidirecional
  public salario: Salario = new Salario();
  public imposto: number = 0;

  public efetuarCalculo(): void {
    this.imposto = this.salario.calcular();
  }
}
