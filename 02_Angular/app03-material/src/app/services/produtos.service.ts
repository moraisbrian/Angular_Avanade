import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends CoreService<Produto> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3200/api/produtos');
  }
}
