import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-alteracao',
  templateUrl: './produto-alteracao.component.html',
  styleUrls: ['./produto-alteracao.component.css']
})
export class ProdutoAlteracaoComponent implements OnInit, OnDestroy {

  constructor(
    private form: FormBuilder,
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  private subscription: Subscription = new Subscription();

  public produto!: Produto;

  public builderForm!: FormGroup;

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') as string;

    this.builderForm = this.form.group({
      _id: [''],
      codigo: ['', [Validators.required, Validators.min(1)]],
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      unidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
      preco: ['', [Validators.required, Validators.min(1)]],
      categoria: ['', [Validators.required]]
    });

    this.subscription.add(this.produtosService.getItem(id)
      .subscribe((produto: Produto) => {
        this.produto = produto;
        this.builderForm.setValue({
          _id: produto._id,
          codigo: produto.codigo,
          descricao: produto.descricao,
          unidade: produto.unidade,
          preco: produto.preco,
          categoria: produto.categoria
        });
      }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public alterarProduto(): void {
    this.submitted = true;
    if (this.builderForm.valid) {
      this.subscription.add(this.produtosService
        .putItem(this.builderForm.value._id, this.builderForm.value)
        .subscribe(() => {
          alert('Produto alterado com sucesso');
          this.router.navigate(['/produtos']);
        }));
    }
  }

  public cancelar(): void {
    this.router.navigate(['/produtos']);
  }

  public limpar(): void {
    this.submitted = false;
    this.builderForm.patchValue({
      codigo: '',
      descricao: '',
      unidade: '',
      preco: '',
      categoria: ''
    });
  }

  public submitted: boolean = false;
  public get f() { return this.builderForm.controls; }
}
