import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto-alteracao',
  templateUrl: './produto-alteracao.component.html',
  styleUrls: ['./produto-alteracao.component.css']
})
export class ProdutoAlteracaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProdutoAlteracaoComponent>,
    @Inject(MAT_DIALOG_DATA) produto: Produto
  ) {
    this.produto = { ...produto };
  }

  ngOnInit(): void {
  }

  public produto!: Produto;

  public categorias: string[] = [
    'INFORMATICA',
    'VESTUARIO',
    'ALIMENTACAO',
    'HIGIENE',
    'CONSTRUCAO'
  ];

  public close(): void {
    this.dialogRef.close();
  }
}
