import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoNovoRoutingModule } from './produto-novo-routing.module';
import { ProdutoNovoComponent } from '../../components/views/produto-novo/produto-novo.component';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProdutoNovoComponent
  ],
  imports: [
    CommonModule,
    ProdutoNovoRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ProdutoNovoComponent
  ]
})
export class ProdutoNovoModule { }
