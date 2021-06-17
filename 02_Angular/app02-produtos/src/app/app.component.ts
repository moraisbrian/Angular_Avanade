import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {
    this.storage = localStorage;
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
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

  public logoff(texto: string): void {
    this.storage.removeItem('usuario');
    this.atribuirUsuario();
    this.router.navigate(['/home']);
  }

  private loginSubscription: Subscription = new Subscription();

  onActivate(component: any): void {
    if (component instanceof LoginComponent) {
      this.loginSubscription = component.usuarioAdicionado
        .subscribe((result: boolean) => {
          if (result) {
            this.atribuirUsuario();
          }
        });
    }
  }

  onDeactivate(): void {
    this.loginSubscription.unsubscribe();
  }
}
