import { TestBed } from '@angular/core/testing';

import { CalculosService } from './calculos.service';

describe('CalculosService', () => {
  let service: CalculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculosService);
  });

  it('instancia de calculos disponivel', () => {
    expect(service).toBeTruthy();
  });

  it('a soma numerica na funcao deve ser exata', () => {
    const soma = service.calcularSoma(2, 2);
    expect(soma).toBe(4);
  });

  it('o imposto deve fornecer valores validos', () => {
    const imposto = service.calcularImposto(2856.97, 6.154);
    expect(imposto).toBeCloseTo(175.81, 0.01);
  });
});
