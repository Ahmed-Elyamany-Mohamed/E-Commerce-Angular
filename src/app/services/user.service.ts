import { Injectable } from '@angular/core';
import { LogIn, SignUp } from '../../sign-up.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  isLoading = false;
  showToast = false;

  // logIn(data: LogIn) {
  //   return this.http.get<LogIn[]>(
  //     `http://localhost:3000/users?email=${data.email}&password=${data.password}`
  //   );
  // }

  async logIn(data: LogIn): Promise<LogIn[] | []> {
    try {
      const res = await this.http
        .get<LogIn[]>(
          `${environment.baseUrl}/users?email=${data.email}&password=${data.password}`
        )
        .toPromise();
      return res || [];
    } catch (err) {
      console.error('User login failed:', err);
      return [];
    }
  }

  // signUp(data: SignUp) {
  //   return this.http.post('http://localhost:3000/users', data).subscribe({
  //     next: () => {
  //       alert('✅ Account created successfully!');
  //       this.router.navigate(['/login']); // ✅ redirect to login page
  //     },
  //     error: () => {
  //       alert('❌ Signup failed. Try again later.');
  //     },
  //   });
  // }

  // signUp(data: SignUp) {
  //   return this.http.post('http://localhost:3000/users', data).subscribe({
  //     next: (res: any) => {
  //       localStorage.setItem('user', JSON.stringify(res)); // ✅ Save to localStorage
  //       alert('✅ Account created successfully!');
  //       this.router.navigate(['/login']); // ✅ Redirect to login page
  //     },
  //     error: () => {
  //       alert('❌ Signup failed. Try again later.');
  //     },
  //   });
  // }

  signUp(data: SignUp, showToast: (msg: string) => void) {
    this.http.post(`${environment.baseUrl}/users`, data).subscribe({
      next: (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        showToast('✅ Account created successfully!');
        this.router.navigate(['/login']);
      },
      error: () => {
        showToast('❌ Signup failed. Please try again.');
      },
    });
  }
}
