import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from '../../classes/contato.classe';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit, OnDestroy {

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  ngOnDestroy() {
    this.contatoSubscription.unsubscribe();
  }

  private contatoSubscription: Subscription = new Subscription();

  public contatos: Contato[] = [];

  public nome: string = '';
  public email: string = '';
  public celular: string = '';

  private listar(): void {
    this.contatoSubscription = this.contatoService.getContatosWs()
      .subscribe((contatos: Contato[]) => this.contatos = contatos);
  }

  public adicionarContato(): void {
    if (this.nome !== '' && this.email !== '' && this.celular !== '') {
      const contato = new Contato(
        this.nome,
        this.email,
        this.celular
      );

      this.contatoService.setContatoWs(contato)
        .subscribe(result => JSON.stringify(result),
        error => alert(error),
        () => {
          this.listar();
          alert('Contato incluído com sucesso');
        });

      this.nome = '';
      this.email = '';
      this.celular = '';
    } else {
      alert('Erros no preenchimento dos dados');
    }
  }

  public exibirContato(contato: Contato): void {;
    this.nome = contato.nome;
    this.email = contato.email;
    this.celular = contato.celular;
  }
}
