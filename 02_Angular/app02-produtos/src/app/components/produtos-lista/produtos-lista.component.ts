import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit, OnDestroy {

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription = new Subscription();

  public listaProdutos: Produto[] = [];

  public listarProdutos(): void {
    this.subscription.add(this.service.getLista()
      .subscribe((result: Produto[]) => this.listaProdutos = result));
  }
}
