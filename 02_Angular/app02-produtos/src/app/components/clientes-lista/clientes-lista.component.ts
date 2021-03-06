import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Cliente } from 'src/app/classes/cliente';
import { Produto } from 'src/app/classes/produto';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { selectedElement } from 'src/app/shared/selected-element';
import { addIfNotContains } from '../../shared/add-if-not-contains';

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
    if (produto._id)
      this.produtosAdicionados = addIfNotContains<string>(this.produtosAdicionados, produto._id);
  }

  public produtoSelecionado(produto: Produto): boolean {
    if (produto._id)
      return selectedElement(produto._id, this.produtosAdicionados);
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

  @Input() clienteAdicionado: Subject<boolean> = new Subject<boolean>();
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

  public deletar(cliente: Cliente): void {
    if (cliente._id) {
      if (confirm('Deseja realmente deletar?')) {
        this.subscriptions.add(this.clientesService.deleteItem(cliente._id)
          .subscribe(() => {
            alert('Cliente deletado');
            this.consultarClientes();
          }));
      }
    }
  }

  public alterar(cliente: Cliente): void {
    if (cliente._id) {
      this.alterandoCliente = true;
      this.adicionandoProduto = false;
      this.exibindoDetalhes = false;
      this.subscriptions.add(this.clientesService.getItem(cliente._id)
        .subscribe((cliente: Cliente) => {
          this.form.setValue({
            '_id': cliente._id,
            'nome': cliente.nome,
            'dataNascimento': new Date(cliente.dataNascimento).toISOString().substring(0, 10),
            'cpf': cliente.cpf,
            'email': cliente.email
          });
          this.btnExibirAlterarModal.nativeElement.click();
        }));
    }
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

  public selecionarProdutos(cliente: Cliente): void {
    if (cliente._id) {
      this.adicionandoProduto = true;
      this.alterandoCliente = false;
      this.exibindoDetalhes = false;
      this.clienteSelecionadoId = cliente._id;
      this.btnExibirAlterarModal.nativeElement.click();
    }
  }

  public adicionarProdutoClienteExistente(): void {
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
      cliente.dataNascimento = new Date(cliente.dataNascimento);
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
