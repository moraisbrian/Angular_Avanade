import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

  public calcularSoma(x: number, y: number): number {
    return x + y;
  }

  public calcularImposto(valor: number, taxa: number): number {
    return valor * taxa / 100;
  }
}
