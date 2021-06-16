import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../classes/cliente';
import { Produto } from '../classes/produto';

@Pipe({
  name: 'produtoCliente'
})
export class ProdutoClientePipe implements PipeTransform {
  transform(produtos: Produto[], input: string, clientes: Cliente[]): Produto[] {
    if (!input)
      return produtos;

    const clientesFilter = clientes.filter(cliente =>
      cliente.nome.toLowerCase()
        .includes(input.toLowerCase()));

    const produtosFilter: Produto[] = [];

    for (let i = 0; i < clientesFilter.length; i++) {
      for (let j = 0; j < clientesFilter[i].produtos.length; j++) {
        const encontrado = produtos.find(produto => produto._id === clientesFilter[i].produtos[j]);
        if (encontrado)
          produtosFilter.push(encontrado);
      }
    }

    return produtosFilter.filter((produto, index) => produtosFilter.indexOf(produto) === index);
  }
}
