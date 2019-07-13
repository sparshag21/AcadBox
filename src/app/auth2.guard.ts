import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from './user-data.service';
import { Router } from '@angular/router';

@Injectable()
export class Auth2Guard implements CanActivate {
  constructor(private auth: UserDataService, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (!this.auth.loggedIn()) { console.log('access granted!'); return true; }

      console.log('access denied!')
      this.router.navigate(['/login']);
      return false


  }
}
