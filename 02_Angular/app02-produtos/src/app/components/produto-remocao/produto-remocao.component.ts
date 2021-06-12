import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-remocao',
  templateUrl: './produto-remocao.component.html',
  styleUrls: ['./produto-remocao.component.css']
})
export class ProdutoRemocaoComponent implements OnInit {

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  private subscription: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private id: string = '';
  public produto!: Produto;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.subscription.add(this.produtosService.getItem(this.id)
      .subscribe((produto: Produto) => this.produto = produto));
  }

  public deletar(): void {
    this.subscription.add(this.produtosService.deleteItem(this.id)
      .subscribe(() => {
        alert('Produto Deletado');
        this.router.navigate(['/produtos']);
      }));
  }

  public cancelar(): void {
    this.router.navigate(['/produtos']);
  }
}
