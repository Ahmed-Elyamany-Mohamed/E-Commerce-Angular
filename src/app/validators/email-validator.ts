import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService {
  constructor(private http: HttpClient) {}

  checkEmailNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      if (!email) return of(null);

      const admin$ = this.http.get<any[]>(
        `http://localhost:3000/admin?email=${email}`
      );
      const user$ = this.http.get<any[]>(
        `http://localhost:3000/users?email=${email}`
      );

      return forkJoin([admin$, user$]).pipe(
        map(([adminRes, userRes]) => {
          const emailExists = adminRes.length > 0 || userRes.length > 0;
          return emailExists ? { emailTaken: true } : null;
        })
      );
    };
  }
}
