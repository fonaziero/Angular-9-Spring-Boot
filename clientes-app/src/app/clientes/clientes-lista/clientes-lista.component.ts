import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente.model';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente: Cliente;

  constructor(private service: ClientesService,private router: Router) {}

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes() {
    this.service
    .getCliente()
    .subscribe( resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form']);
  }

  selectedCliente(cliente: Cliente){
    this.cliente = cliente;
  }

  deletarCliente() {
    this.service.deletarCliente(this.cliente).subscribe(response => 'Cliente deletado !',
     errorReponse => 'Erro ao deletar o cliente.');
     location.reload(true);
  };

}
