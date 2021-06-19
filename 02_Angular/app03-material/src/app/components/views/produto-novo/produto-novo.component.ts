import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit, OnDestroy {

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.produto = {
      codigo: 0,
      descricao: '',
      unidade: '',
      categoria: 'INFORMATICA',
      preco: 0
    }
  }

  private subscriptions: Subscription = new Subscription();

  public produto!: Produto;

  public categorias: string[] = [
    'INFORMATICA',
    'VESTUARIO',
    'ALIMENTACAO',
    'HIGIENE',
    'CONSTRUCAO'
  ];

  public incluirProduto(): void {
    this.subscriptions.add(this.produtosService.postItem(this.produto)
      .subscribe(() => {
        this.router.navigate(['/produtos']);
      }));
  }
}
