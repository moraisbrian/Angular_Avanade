import { Component, OnInit } from '@angular/core';
import { Contato } from '../classes/contato.classe';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public contatos: Contato[] = [];

  public nome: string = '';
  public email: string = '';
  public celular: string = '';

  public adicionarContato(): void {
    this.contatos.push(new Contato(
      this.nome,
      this.email,
      this.celular
    ));

    this.nome = '';
    this.email = '';
    this.celular = '';
  }

  public exibirContato(tableRow: HTMLTableRowElement): void {
    const columns = tableRow.children;

    this.nome = columns[0].innerHTML;
    this.email = columns[1].innerHTML;
    this.celular = columns[2].innerHTML;
  }
}
