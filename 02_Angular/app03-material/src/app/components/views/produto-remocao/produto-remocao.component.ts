import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto-remocao',
  templateUrl: './produto-remocao.component.html',
  styleUrls: ['./produto-remocao.component.css']
})
export class ProdutoRemocaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProdutoRemocaoComponent>,
    @Inject(MAT_DIALOG_DATA) produto: Produto
  ) {
    this.produto = { ...produto };
  }

  public produto: Produto;

  ngOnInit(): void {
  }

  public acao(valor: boolean): void {
    this.dialogRef.close(valor);
  }
}
