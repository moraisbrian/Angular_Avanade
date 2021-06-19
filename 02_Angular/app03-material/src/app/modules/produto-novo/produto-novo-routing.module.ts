import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoNovoComponent } from 'src/app/components/views/produto-novo/produto-novo.component';

const routes: Routes = [
  { path: '', component: ProdutoNovoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoNovoRoutingModule { }
