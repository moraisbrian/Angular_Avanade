import { unwrapResolvedMetadata } from '@angular/compiler';
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
    if (this.validarEmail() && this.validarCelular() && this.validarNome()) {
      this.contatos.push(new Contato(
        this.nome,
        this.email,
        this.celular
      ));

      this.nome = '';
      this.email = '';
      this.celular = '';
    } else {
      alert('Erros no preenchimento dos dados');
    }
  }

  public exibirContato(tableRow: HTMLTableRowElement): void {
    const columns = tableRow.children;

    this.nome = columns[0].innerHTML;
    this.email = columns[1].innerHTML;
    this.celular = columns[2].innerHTML;
  }

  private validarNome(): boolean {
    return this.nome !== ''
      && this.nome !== null
      && this.nome !== undefined;
  }

  private validarCelular(): boolean {
    const pattern = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
    const regex = new RegExp(pattern);

    return this.celular !== ''
      && this.celular !== null
      && this.celular !== undefined
      && this.celular.match(regex) !== null;
  }

  private validarEmail(): boolean {
    const pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const regex = new RegExp(pattern);

    return this.email !== ''
      && this.email !== null
      && this.email !== undefined
      && this.email.match(regex) !== null;
  }
}
