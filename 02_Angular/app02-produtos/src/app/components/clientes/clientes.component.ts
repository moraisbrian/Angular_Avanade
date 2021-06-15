import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/classes/produto';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProdutosService } from 'src/app/services/produtos.service';

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

  @ViewChild('btnFecharModal', { static: true}) private btnFecharModal!: ElementRef;

  public clienteAdicionado: EventEmitter<boolean> = new EventEmitter<boolean>();
  private subscriptions: Subscription = new Subscription();

  public produtos: Produto[] = [];

  public form: FormGroup = new FormGroup({
    'nome': new FormControl('', [ Validators.required ]),
    'dataNascimento': new FormControl('', [ Validators.required ]),
    'cpf': new FormControl('', [ Validators.required ]),
    'email': new FormControl('', [ Validators.required ]),
    'produto': new FormControl('', [ Validators.required ])
  });

  public adicionarCliente(): void {
    if (this.form.valid) {
      this.subscriptions.add(this.clientesService.postItem(this.form.value)
        .subscribe(() => {
          this.clienteAdicionado.emit(true);
          this.btnFecharModal.nativeElement.click();
          alert('Cliente adicionado');
        }));
    }
  }

  public limparFormulario(): void {
    this.form.reset();
  }
}
