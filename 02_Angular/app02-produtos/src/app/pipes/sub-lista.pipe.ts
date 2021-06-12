import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subLista'
})
export class SubListaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
