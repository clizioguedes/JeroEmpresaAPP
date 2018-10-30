import { AfService } from '../serviços/af.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private afService: AfService) { }

  canActivate() {
    if ( this.afService.isLoggedIn() ) {
        return true;
    } else {
      this.router.navigate(['/login']);
        alert('Por Favor, Faça o Login para Ter Acesso as Funcionalidades!');
        return false;
      }
  }
}