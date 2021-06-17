import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
    this.storage = localStorage;
  }

  ngOnInit(): void {
    this.atribuirUsuario();
  }

  public atribuirUsuario(): void {
    if (this.storage.getItem('usuario')) {
      this.nome = 'Olá, ' + this.storage.getItem('usuario');
    } else {
      this.nome = 'Efetuar Login';
    }
  }

  public nome: string = '';
  private storage: Storage;

  public mostrar(texto: string): void {
    this.storage.removeItem('usuario');
    this.atribuirUsuario();
    alert(texto);
  }
}
