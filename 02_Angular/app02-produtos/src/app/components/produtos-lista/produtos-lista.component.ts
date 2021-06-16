import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/classes/cliente';
import { Produto } from 'src/app/classes/produto';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit, OnDestroy {

  constructor(private service: ProdutosService, private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.listarProdutos();
    this.clientesService.getLista()
      .subscribe((clientes: Cliente[]) => this.listaClientes = clientes);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription = new Subscription();

  public listaProdutos: Produto[] = [];
  public listaClientes: Cliente[] = [];

  public listarProdutos(): void {
    this.subscription.add(this.service.getLista()
      .subscribe((result: Produto[]) => this.listaProdutos = result));
  }
}
