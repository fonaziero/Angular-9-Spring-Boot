import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente.model';
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: string[];
  id: string;
  params: string;

  constructor( private service: ClientesService, private router: Router, private activetedRoute: ActivatedRoute ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.getIdByUrl();
  }

  onSubmit() {
    if(this.id) {
      this.updateCliente();
    }else {
      this.newCliente();
    }
  }

  updateCliente() {
    this.service.atualizar(this.cliente).subscribe(response => {
     this.success = true;
     setInterval(() => this.success = false, 4000);
      this.errors = null;
    }, errorReponse => {this.errors = ['Erro ao atualizar']})
  }

  newCliente() {
    this.service
    .salvar(this.cliente)
    .subscribe( response => {
      this.success = true;
      setInterval(() => this.success = false, 4000);
      this.errors = null;
      this.cliente = response;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
  }

  getIdByUrl() {
    this.id = this.activetedRoute.snapshot.paramMap.get('id');

    if(this.id) {
      this.service.getClienteById(this.id).subscribe(
          response => this.cliente = response
      )
    }
  }

  voltar() {
    this.router.navigate(['/clientes-list']);
  }

}
