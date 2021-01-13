import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from './../../clientes/cliente.model';
import { Component, OnInit } from '@angular/core';
import { ServicoPrestado } from '../servico-prestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  success: boolean = false;
  errors: string[];
  clientes: Cliente[];
  servico: ServicoPrestado

  constructor( private clienteService: ClientesService , private service: ServicoPrestadoService) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getCliente().subscribe(response => this.clientes = response)
  }

  onSubmit() {
    this.service.salvar(this.servico).subscribe( response => {
      this.success = true;
     setInterval(() => this.success = false, 4000);
      this.errors = null;
      this.servico = new ServicoPrestado();
    }, errorReponse => { this.errors = errorReponse.error.errors;
      setInterval(() => this.errors = null , 4000)
    })}

}
