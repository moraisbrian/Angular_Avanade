import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRemocaoRoutingModule } from './produto-remocao-routing.module';
import { ProdutoRemocaoComponent } from '../../components/views/produto-remocao/produto-remocao.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutoRemocaoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRemocaoRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ]
})
export class ProdutoRemocaoModule { }
