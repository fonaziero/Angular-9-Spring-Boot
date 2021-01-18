import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userLogIn: string;

  constructor(
    private authService: AuthService,
    private router :Router) { }

  ngOnInit(): void {
    this.userLogIn = this.authService.getUsuarioAutentificado();
  }

  logout() {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

}
