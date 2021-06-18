import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from '../../components/views/produtos/produtos.component';

import { MatButtonModule } from '@angular/material/button';
import { ProdutosListaModule } from '../produtos-lista/produtos-lista.module';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatButtonModule,
    ProdutosListaModule
  ]
})
export class ProdutosModule { }
