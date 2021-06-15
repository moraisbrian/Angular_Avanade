import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desconto'
})
export class DescontoPipe implements PipeTransform {
  transform(value: number, taxa: number): number {
    return value - (value * taxa / 100);
  }
}
