import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdminLoggedIn = !!localStorage.getItem('admin');

    if (isAdminLoggedIn) {
      this.router.navigate(['/admin/dashboard']);
      return false;
    }

    return true;
  }
}
