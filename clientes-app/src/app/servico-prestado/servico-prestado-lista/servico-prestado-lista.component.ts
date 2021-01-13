import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestadoBusca } from './servico-prestado-busca';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];
  message: string;

  constructor( private service: ServicoPrestadoService, private route: Router ) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.buscar(this.nome, this.mes).subscribe(response => {
      this.lista = response;
      if(this.lista.length <= 0 ){
        this.message = "Nenhum Registro encontrado."
      }else {
        this.message = null;
      }
    });
  }

}
