import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simbolo'
})
export class SimboloPipe implements PipeTransform {
  transform(unidade: string): string {
    return `[${unidade}]`;
  }
}
