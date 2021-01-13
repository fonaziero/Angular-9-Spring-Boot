import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';


const routes: Routes = [
  {path: 'clientes-form' , component: ClientesFormComponent},
  {path: 'clientes-form/:id' , component: ClientesFormComponent},
  {path: 'clientes-list', component: ClientesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
