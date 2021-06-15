import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListaComponent } from '../clientes-lista/clientes-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes.component';


@NgModule({
  declarations: [
    ClientesListaComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
