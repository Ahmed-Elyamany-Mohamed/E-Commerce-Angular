// import { CanActivate, GuardResult, MaybeAsync } from '@angular/router';

// import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { SellerService } from '../services/seller.service';
// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private sellerService: SellerService) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (localStorage.getItem('admin')) {
//       return true;
//     }
//     return this.sellerService.isSellerLoggedIn;
//   }
// }

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
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAdmin = localStorage.getItem('admin');

    if (isAdmin) {
      return true;
    }

    // Not logged in → redirect to home or login
    this.router.navigate(['/home']);
    return false;
  }
}
