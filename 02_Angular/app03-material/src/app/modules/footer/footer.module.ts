import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from '../../components/modelos/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MatToolbarModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
