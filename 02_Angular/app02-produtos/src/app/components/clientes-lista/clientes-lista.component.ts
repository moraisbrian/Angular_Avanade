import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/classes/cliente';
import { Produto } from 'src/app/classes/produto';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit, OnDestroy {

  constructor(private clientesService: ClientesService, private produtosService: ProdutosService) { }

  ngOnInit() {
    this.observarAdicaoCliente();
    this.consultarClientes();
    this.subscriptions.add(this.produtosService.getLista()
      .subscribe((produtos: Produto[]) => this.produtos = produtos));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public form: FormGroup = new FormGroup({
    '_id': new FormControl(''),
    'nome': new FormControl('', [Validators.required]),
    'dataNascimento': new FormControl('', [Validators.required]),
    'cpf': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required])
  });

  public produtosAdicionados: string[] = [];

  public adicionarProduto(produto: Produto): void {
    if (produto._id) {
      const possui = this.produtosAdicionados.find(id => id === produto._id);
      if (possui) {
        this.produtosAdicionados = this.produtosAdicionados.filter(id => id !== produto._id);
      } else {
        this.produtosAdicionados.push(produto._id);
      }
    }
  }

  public selecionado(produto: Produto): boolean {
    if (produto._id) {
      const adicionado = this.produtosAdicionados.find(p => p === produto._id);
      if (adicionado)
        return true;
    }
    return false;
  }

  public clientes!: Cliente[];
  public produtos!: Produto[];

  public clienteDetalhes!: Cliente;
  public produtosDetalhe!: Produto[];

  public adicionandoProduto: boolean = false;
  public exibindoDetalhes: boolean = false;
  public alterandoCliente: boolean = false;

  private clienteSelecionadoId: string = '';

  private subscriptions: Subscription = new Subscription();

  @Input() clienteAdicionado: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('btnExibirAlterarModal', { static: true }) private btnExibirAlterarModal!: ElementRef;
  @ViewChild('btnFecharModal', { static: true }) private btnFecharModal!: ElementRef;

  private observarAdicaoCliente(): void {
    this.subscriptions.add(this.clienteAdicionado.subscribe((result: boolean) => {
      if (result) {
        this.consultarClientes();
      }
    }));
  }

  private consultarClientes(): void {
    this.subscriptions.add(this.clientesService.getLista()
      .subscribe((clientes: Cliente[]) => this.clientes = clientes));
  }

  public deletar(id: string): void {
    if (confirm('Deseja realmente deletar?')) {
      this.subscriptions.add(this.clientesService.deleteItem(id)
        .subscribe(() => {
          alert('Cliente deletado');
          this.consultarClientes();
        }));
    }
  }

  public alterar(id: string): void {
    this.alterandoCliente = true;
    this.adicionandoProduto = false;
    this.exibindoDetalhes = false;
    this.subscriptions.add(this.clientesService.getItem(id)
      .subscribe((cliente: Cliente) => {
        this.form.setValue({
          '_id': cliente._id,
          'nome': cliente.nome,
          'dataNascimento': cliente.dataNascimento.toISOString(), // Verificar
          'cpf': cliente.cpf,
          'email': cliente.email
        });
        this.btnExibirAlterarModal.nativeElement.click();
      }));
  }

  public alterarCliente(): void {
    this.subscriptions.add(this.clientesService.putItem(this.form.value._id, this.form.value)
      .subscribe(() => {
        alert('Cliente alterado');
        this.consultarClientes();
        this.btnFecharModal.nativeElement.click();
      }));
  }

  public limparFormulario(): void {
    this.produtosAdicionados = [];
    this.form.reset();
  }

  public selecionarProdutos(id: string): void {
    this.adicionandoProduto = true;
    this.alterandoCliente = false;
    this.exibindoDetalhes = false;
    this.clienteSelecionadoId = id;
    this.btnExibirAlterarModal.nativeElement.click();
  }

  public addProduto(): void {
    if (this.produtosAdicionados.length > 0) {
      this.subscriptions.add(this.clientesService.getItem(this.clienteSelecionadoId)
        .subscribe((cliente: Cliente) => {
          this.produtosAdicionados.forEach(produto => cliente.produtos.push(produto));
          this.subscriptions.add(this.clientesService.putItem(this.clienteSelecionadoId, cliente)
            .subscribe(() => {
              alert('Produto adicionado');
              this.consultarClientes();
              this.btnFecharModal.nativeElement.click();
            }));
        }));
    }
  }

  public exibirDetalhes(cliente: Cliente): void {
    this.exibindoDetalhes = true;
    this.adicionandoProduto = false;
    this.alterandoCliente = false;
    if (cliente._id) {
      this.clienteDetalhes = cliente;
      this.produtosDetalhe = this.produtos.filter(produto => {
        if (produto._id) {
          return cliente.produtos.includes(produto._id)
        }
        return;
      });
      this.btnExibirAlterarModal.nativeElement.click();
    }
  }
}
