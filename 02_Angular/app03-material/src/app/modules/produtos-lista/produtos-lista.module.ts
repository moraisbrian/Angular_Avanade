import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaRoutingModule } from './produtos-lista-routing.module';
import { ProdutosListaComponent } from '../../components/views/produtos-lista/produtos-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoAlteracaoModule } from '../produto-alteracao/produto-alteracao.module';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosListaRoutingModule,
    HttpClientModule,
    ProdutoAlteracaoModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    ProdutosListaComponent
  ]
})
export class ProdutosListaModule { }
