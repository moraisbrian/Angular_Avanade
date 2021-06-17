import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private form: FormBuilder,
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
  }

  private storage: Storage = localStorage;

  public builderForm: FormGroup = this.form.group({
    usuario: [''],
    senha: ['']
  });

  public efetuarLogin(): void {
    const usuario = this.builderForm.value.usuario;
    const senha = this.builderForm.value.senha;

    const valida = this.usuariosService.usuarios.includes(usuario);

    if (valida && senha === 'admin') {
      this.storage.setItem('usuario', usuario);
      this.router.navigate(['/home']);
    } else {
      this.builderForm.reset();
    }
  }
}
