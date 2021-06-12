import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProdutosComponent } from './produtos.component';
import { ProdutoNovoComponent } from '../produto-novo/produto-novo.component';
import { ProdutosListaComponent } from '../produtos-lista/produtos-lista.component';
import { ProdutoAlteracaoComponent } from '../produto-alteracao/produto-alteracao.component';
import { ProdutoRemocaoComponent } from '../produto-remocao/produto-remocao.component';
import { SubListaPipe } from 'src/app/pipes/sub-lista.pipe';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoNovoComponent,
    ProdutosListaComponent,
    ProdutoAlteracaoComponent,
    ProdutoRemocaoComponent,
    SubListaPipe
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
