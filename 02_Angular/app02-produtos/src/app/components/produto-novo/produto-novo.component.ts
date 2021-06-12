import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit, OnDestroy {

  constructor(
    private form: FormBuilder,
    private produtoService: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription = new Subscription();

  public builderForm: FormGroup = this.form.group({
    codigo: ['', [Validators.required, Validators.min(1)]],
    descricao: ['', [Validators.required, Validators.minLength(3)]],
    unidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
    preco: ['', [Validators.required, Validators.min(1)]],
    categoria: ['', [Validators.required]]
  });

  public incluirProduto(): void {
    this.submitted = true;
    if (this.builderForm.valid) {
      const produto: Produto = this.builderForm.value;
      this.subscription = this.produtoService.postItem(produto)
        .subscribe(() => {
          alert('Produto incluído com sucesso');
          this.router.navigate(['/produtos']);
        });
    }
  }

  public limpar(): void {
    this.submitted = false;
    this.builderForm.reset();
  }

  public submitted: boolean = false;
  public get f() { return this.builderForm.controls; }
}
