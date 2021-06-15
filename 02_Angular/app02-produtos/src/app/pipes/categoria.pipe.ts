import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../classes/produto';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {
  transform(produtos: Produto[], input: string): Produto[] {
    if (!input)
      return produtos;

    return produtos.filter(produto =>
      produto.categoria.toUpperCase() === input.toUpperCase());
  }
}
