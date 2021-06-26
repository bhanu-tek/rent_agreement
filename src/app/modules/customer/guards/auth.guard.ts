import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private $router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLoggedin = localStorage.getItem('isLoggedin');
      if(isLoggedin) {
        return true;
      } else {
        // alert('you need to login to access this page');
        this.$router.navigate(['customer/login']);
        return false;
      }
  }
  
}
