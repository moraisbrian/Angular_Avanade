import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../classes/cliente';
import { CoreService } from '../classes/core-service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends CoreService<Cliente> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3200/api/clientes');
  }
}
