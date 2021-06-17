import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

constructor() { }

  public get usuarios(): string[] {
    return ['admin', 'avanade', 'brian', 'modelo', 'convidado'];
  }

}
