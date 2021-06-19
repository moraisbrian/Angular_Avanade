import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaRoutingModule } from './produtos-lista-routing.module';
import { ProdutosListaComponent } from '../../components/views/produtos-lista/produtos-lista.component';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosListaRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    ProdutosListaComponent
  ]
})
export class ProdutosListaModule { }
