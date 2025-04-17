import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LogIn, SignUp } from '../../sign-up.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  // ? type of RxJS Observable :
  // ? hold current value : true or false
  // * can update value by .next()
  // ? It's perfect for login/auth flags, theme mode, loading state

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  // signUp(data: SignUp) {
  //   // console.log('service is called ');
  //   return this.http
  //     .post('http://localhost:3000/admin', data, { observe: 'response' })
  //     .subscribe((res) => {
  //       console.warn(res);
  //       if (res) {
  //         this.isSellerLoggedIn.next(true),
  //           localStorage.setItem('admin', JSON.stringify(res.body)),
  //           this.router.navigate(['login']);
  //       }
  //     });
  // }

  // signUp(data: SignUp) {
  //   this.http
  //     .post('http://localhost:3000/admin', data, { observe: 'response' })
  //     .subscribe((res) => {
  //       if (res) {
  //         // Don’t log in automatically
  //         this.router.navigate(['login']); // ✅ Redirect to login
  //       }
  //     });
  // }

  // logIn(data: LogIn) {
  //   return this.http.get<LogIn[]>(
  //     `http://localhost:3000/admin?email=${data.email}&password=${data.password}`
  //   );
  // }

  async logIn(data: LogIn): Promise<LogIn[] | []> {
    try {
      const res = await this.http
        .get<LogIn[]>(
          `${environment.baseUrl}/admin?email=${data.email}&password=${data.password}`
        )
        .toPromise();
      return res || [];
    } catch (err) {
      console.error('Admin login failed:', err);
      return [];
    }
  }

  reLoadSeller() {
    if (localStorage.getItem('admin'))
      [this.isSellerLoggedIn.next(true), this.router.navigate(['/dashboard'])];
  }
}
