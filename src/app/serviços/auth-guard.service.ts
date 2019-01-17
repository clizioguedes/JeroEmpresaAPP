import { AfService } from '../serviços/af.service';
import { Injectable } from '@angular/core';
import { tap, take, map } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private afService: AfService) { }


  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {


    return this.afService.authInfo$.pipe(
      map(authInfo => authInfo.isLoggedIn()),
      take(1),
      tap(allowed => {
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      }),
    );
  }
}
