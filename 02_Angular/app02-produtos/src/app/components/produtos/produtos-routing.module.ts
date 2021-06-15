import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoAlteracaoComponent } from '../produto-alteracao/produto-alteracao.component';
import { ProdutoRemocaoComponent } from '../produto-remocao/produto-remocao.component';
import { ProdutoNovoComponent } from '../produto-novo/produto-novo.component';
import { ProdutosComponent } from './produtos.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'novo', component: ProdutoNovoComponent, canActivate: [ AuthGuardService ] },
  { path: 'alteracao/:id', component: ProdutoAlteracaoComponent },
  { path: 'remocao/:id', component: ProdutoRemocaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
