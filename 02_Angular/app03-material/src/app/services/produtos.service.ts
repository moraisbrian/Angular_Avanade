import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Produto } from '../models/produto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends CoreService<Produto> {
  constructor(http: HttpClient, snackBar: MatSnackBar) {
    super(http, 'http://localhost:3200/api/produtos', snackBar);
  }
}
