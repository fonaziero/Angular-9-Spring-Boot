import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  cadastrando:boolean = false;
  messageSucesso: string;
  errors: string[];

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.authService.tryLogin(this.username, this.password)
    .subscribe(res => {
      const access_token = JSON.stringify(res);
      localStorage.setItem('access_token', access_token);
      this.route.navigate(['/home']);
    }, errorReponse => {
      this.errors = ['Usuario ou Senha incorretos']
    })
  }

  preCadastrar(event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cadastra() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
        .subscribe( response => {
          this.messageSucesso = "Cadastro efetuado com sucesso!";
          this.cadastrando = false;
          this.username = '';
          this.password ='';
          this.errors = [];
        }, errorResponse => {
          this.errors = errorResponse.error.errors;
          this.messageSucesso = null;
        })
  }

  cancelarCadastro() {
    this.cadastrando = false;
  }

}
