import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../classes/cliente';
import { Produto } from '../classes/produto';
import { ClientesService } from '../services/clientes.service';

@Pipe({
  name: 'produtoCliente'
})
export class ProdutoClientePipe implements PipeTransform, OnInit {
  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getLista()
      .subscribe((clientes: Cliente[]) => this.clientes = clientes);
  }

  private clientes: Cliente[] = [];

  transform(produtos: Produto[], input: string): Produto[] {
    if (!input)
      return produtos;

    const clientesFilter = this.clientes.filter(cliente => {
      input.includes(cliente.nome)
    });

    const produtosFilter: Produto[] = [];

    for (let i = 0; i < clientesFilter.length; i++) {
      for (let j = 0; j < clientesFilter[i].produtos.length; j++) {
        const encontrado = produtos.find(a => a._id === clientesFilter[i].produtos[j]);
        if (encontrado)
          produtosFilter.push(encontrado);
      }
    }

    return produtosFilter;
  }
}
