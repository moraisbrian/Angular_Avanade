import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoNovoComponent } from '../produto-novo/produto-novo.component';
import { ProdutosListaComponent } from '../produtos-lista/produtos-lista.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoNovoComponent,
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
