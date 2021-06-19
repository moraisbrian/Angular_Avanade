import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from '../../components/views/produtos/produtos.component';
import { ProdutoNovoModule } from '../produto-novo/produto-novo.module';
import { ProdutosListaModule } from '../produtos-lista/produtos-lista.module';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatButtonModule,
    ProdutosListaModule,
    ProdutoNovoModule
  ]
})
export class ProdutosModule { }
