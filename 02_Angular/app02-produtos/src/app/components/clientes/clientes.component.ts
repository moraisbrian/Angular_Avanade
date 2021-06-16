import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/classes/cliente';
import { Produto } from 'src/app/classes/produto';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { addIfNotContains } from 'src/app/shared/add-if-not-contains';
import { selectedElement } from 'src/app/shared/selected-element';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.produtosService.getLista()
      .subscribe((produtos: Produto[]) => this.produtos = produtos));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public criarNovoCliente(): void {
    this.router.navigate(['/clientes/novo']);
  }

  @ViewChild('btnFecharModal', { static: true }) private btnFecharModal!: ElementRef;

  public clienteAdicionado: EventEmitter<boolean> = new EventEmitter<boolean>();
  private subscriptions: Subscription = new Subscription();

  public produtos: Produto[] = [];

  public form: FormGroup = new FormGroup({
    'nome': new FormControl('', [Validators.required]),
    'dataNascimento': new FormControl('', [Validators.required]),
    'cpf': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required])
  });

  public produtosAdicionados: string[] = [];

  public adicionarProduto(produto: Produto): void {
    if (produto._id) {
      if (produto._id)
      this.produtosAdicionados = addIfNotContains<string>(this.produtosAdicionados, produto._id);
    }
  }

  public produtoSelecionado(produto: Produto): boolean {
    if (produto._id)
      return selectedElement(produto._id, this.produtosAdicionados);
    return false;
  }

  public adicionarCliente(): void {
    if (this.form.valid && this.produtosAdicionados.length > 0) {
      const cliente: Cliente = new Cliente(
        this.form.value.nome,
        this.form.value.dataNascimento,
        this.form.value.cpf,
        this.form.value.email,
        this.produtosAdicionados
      );
      this.subscriptions.add(this.clientesService.postItem(cliente)
        .subscribe(() => {
          this.clienteAdicionado.emit(true);
          this.btnFecharModal.nativeElement.click();
          alert('Cliente adicionado');
          this.limparFormulario();
        }));
    }
  }

  public limparFormulario(): void {
    this.form.reset();
    this.produtosAdicionados = []
  }
}
