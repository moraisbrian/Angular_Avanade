import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../classes/cliente';

@Pipe({
  name: 'subListaCliente'
})
export class SubListaClientePipe implements PipeTransform {
  transform(clientes: Cliente[], input: string): Cliente[] {
    if (!input)
      return clientes;

    return clientes.filter(cliente =>
      cliente.nome.toLowerCase()
        .includes(input.toLowerCase()));
  }
}
