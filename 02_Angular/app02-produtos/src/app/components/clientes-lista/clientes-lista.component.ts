import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/classes/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit, OnDestroy {

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.observarAdicaoCliente();
    this.consultarClientes();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public clientes: Cliente[] = [];

  private subscriptions: Subscription = new Subscription();

  @Input() clienteAdicionado: EventEmitter<boolean> = new EventEmitter<boolean>();

  private observarAdicaoCliente(): void {
    this.subscriptions.add(this.clienteAdicionado.subscribe((result: boolean) => {
      if (result) {
        this.consultarClientes();
      }
    }));
  }

  private consultarClientes(): void {
    this.subscriptions.add(this.clientesService.getLista()
      .subscribe((clientes: Cliente[]) => this.clientes = clientes));
  }

}
