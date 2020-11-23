import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
   return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

   return true;
  }

}
