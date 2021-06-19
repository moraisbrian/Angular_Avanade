import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from '../../components/modelos/navbar/navbar.component';
import { HomeModule } from '../home/home.module';
import { ProdutosModule } from '../produtos/produtos.module';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ProdutosModule,
    HomeModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
