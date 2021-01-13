import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Cliente } from './clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl: string = environment.apiUrl + '/api/clientes';

  constructor( private http: HttpClient ) {

  }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>( `${this.apiUrl}`,cliente);
  }

  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`,cliente);
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}`);
  }

  getClienteById(id: string) :Observable<Cliente>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deletarCliente(cliente: Cliente): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${cliente.id}`);
  }

}
