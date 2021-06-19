import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ProdutoAlteracaoComponent } from '../produto-alteracao/produto-alteracao.component';
import { ProdutoRemocaoComponent } from '../produto-remocao/produto-remocao.component';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit, OnDestroy {

  constructor(private produtosService: ProdutosService, private matDialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.listar();
  }

  public produtos: Produto[] = [];
  public listaColunas: string[] = ['codigo', 'descricao', 'unidade', 'preco', 'acao'];

  private subscription: Subscription = new Subscription();

  private listar(): void {
    this.subscription.add(this.produtosService.getLista()
      .subscribe((produtos: Produto[]) => this.produtos = produtos));
  }

  public openDialog(produto: Produto): void {
    const dialogRef = this.matDialog.open(ProdutoAlteracaoComponent, {
      disableClose: true,
      autoFocus: true,
      data: produto
    });

    this.subscription.add(dialogRef.afterClosed().subscribe((produto: Produto) => {
      if (produto._id) {
        this.subscription.add(this.produtosService.putItem(produto._id, produto)
          .subscribe(() => this.listar()));
      }
    }));
  }

  public deletar(produto: Produto): void {
    if (produto._id) {
      const dialogRef = this.matDialog.open(ProdutoRemocaoComponent, {
        disableClose: true,
        autoFocus: true,
        data: produto
      });

      this.subscription.add(dialogRef.afterClosed().subscribe((res: boolean) => {
        if (res) {
          this.subscription.add(this.produtosService.deleteItem(produto._id as string)
            .subscribe(() => {
              this.produtosService.showMessage('Produto deletado');
              this.listar();
            }));
        }
      }));
    }
  }

}
