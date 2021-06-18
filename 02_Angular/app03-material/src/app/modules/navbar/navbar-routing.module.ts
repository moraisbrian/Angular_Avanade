import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', loadChildren: () => import('../produtos/produtos.module').then(module => module.ProdutosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
