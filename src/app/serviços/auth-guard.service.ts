import { AfService } from '../serviços/af.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private afService: AfService) { }

  canActivate() {
    if (this.afService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
