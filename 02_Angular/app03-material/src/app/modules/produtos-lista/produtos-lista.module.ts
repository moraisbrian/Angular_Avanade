import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaRoutingModule } from './produtos-lista-routing.module';
import { ProdutosListaComponent } from '../../components/views/produtos-lista/produtos-lista.component';

@NgModule({
  declarations: [
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosListaRoutingModule
  ],
  exports: [
    ProdutosListaComponent
  ]
})
export class ProdutosListaModule { }
