import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-alteracao',
  templateUrl: './produto-alteracao.component.html',
  styleUrls: ['./produto-alteracao.component.css']
})
export class ProdutoAlteracaoComponent implements OnInit, OnDestroy {

  constructor(
    private form: FormBuilder,
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  private subscription: Subscription = new Subscription();

  public produto!: Produto;

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') as string;
    this.subscription.add(this.produtosService.getItem(id)
      .subscribe((produto: Produto) => this.produto = produto));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
