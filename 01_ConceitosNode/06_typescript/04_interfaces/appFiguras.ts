import { IFigura } from './figura';
import { Retangulo } from './retangulo';

const f1: Retangulo = new Retangulo(10, 15);
console.log(f1.calcularArea());

const f2: IFigura = new Retangulo(5, 8);
console.log(f2.calcularArea());