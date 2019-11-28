import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  estaLogueado: Observable<boolean>;
  nombreUsuario: Observable<string>;
  constructor(public apiService: ApiService, private route: Router) { 
    this.estaLogueado = this.apiService.estaLogueado(); 
    this.nombreUsuario = this.apiService.usuarioConectado();
  }

  ngOnInit() {

  }

  logout() {
    this.apiService.logout();
    this.route.navigate(['/']);
  }


}
