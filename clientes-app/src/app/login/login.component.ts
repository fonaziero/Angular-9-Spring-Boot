import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;
  cadastrando:boolean;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.password + this.password);
    this.route.navigate(['/home'])

  }

  cadastrar(event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro() {
    this.cadastrando = false;
  }

}
