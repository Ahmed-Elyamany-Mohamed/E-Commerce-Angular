import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { forkJoin, min } from 'rxjs';
import { LogIn } from '../../../sign-up.model';
import { SellerService } from '../../services/seller.service';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  myForm!: FormGroup;
  // name!: FormControl;
  email!: FormControl;
  password!: FormControl;
  // message!: FormControl;
  // to!: FormControl;
  submitted = false;
  isLoading = false;
  showToast = false;
  toastMessage = '';

  showLoginForm: boolean = false;
  authError: string = '';

  constructor(
    private sellerService: SellerService,
    private router: Router,
    private userService: UserService,
    private cartService: CartService
  ) {
    this.initFormControl();
    this.createForm();
  }

  initFormControl() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
  }

  createForm() {
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
  ngOnInit(): void {
    this.sellerService.reLoadSeller();
  }

  // onSubmit() {
  //   if (this.myForm.valid) {
  //     const { email, password } = this.myForm.value;

  //     const admin$ = this.sellerService.logIn({ email, password });
  //     const user$ = this.userService.logIn({ email, password });

  //     forkJoin([admin$, user$]).subscribe(([adminRes, userRes]) => {
  //       if (adminRes.length === 1 && userRes.length === 0) {
  //         // ✅ Admin only
  //         localStorage.setItem('admin', JSON.stringify(adminRes[0]));
  //         this.router.navigate(['/admin/dashboard']);
  //       } else if (userRes.length === 1) {
  //         // ✅ User only (or both but prefer user role)
  //         localStorage.setItem('user', JSON.stringify(userRes[0]));
  //         this.router.navigate(['/home']);
  //       } else {
  //         alert('❌ Invalid email or password');
  //       }
  //     });
  //   }
  // }

  // !!----
  // async onSubmit() {
  //   if (this.myForm.valid) {
  //     const { email, password } = this.myForm.value;

  //     // 🔁 Try admin login
  //     const adminRes = await this.sellerService.logIn({ email, password });
  //     if (adminRes.length === 1) {
  //       localStorage.setItem('admin', JSON.stringify(adminRes[0]));
  //       this.router.navigate(['/admin/dashboard']);
  //       return;
  //     }

  //     // 🔁 Try user login
  //     const userRes = await this.userService.logIn({ email, password });
  //     if (userRes.length === 1) {
  //       localStorage.setItem('user', JSON.stringify(userRes[0]));
  //       this.router.navigate(['/home']);
  //       return;
  //     }

  //     // ❌ Invalid credentials
  //     this.showToastMessage('❌ Invalid email or password');
  //   }
  // }

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // async onSubmit() {
  //   if (this.myForm.valid) {
  //     const { email, password } = this.myForm.value;

  //     // 1️⃣ Try admin login
  //     const adminRes = await this.sellerService.logIn({ email, password });
  //     if (adminRes.length === 1) {
  //       localStorage.setItem('admin', JSON.stringify(adminRes[0]));
  //       this.router.navigate(['/admin/dashboard']);
  //       return;
  //     }

  //     // 2️⃣ Try user login
  //     const userRes = await this.userService.logIn({ email, password });
  //     if (userRes.length === 1) {
  //       const user = userRes[0] as LogIn & { id: string };
  //       localStorage.setItem('user', JSON.stringify(user));

  //       // ✅ 3️⃣ ⬇️ Add cart merge logic here
  //       const guestCart = localStorage.getItem('cart_guest');
  //       if (guestCart) {
  //         const parsed = JSON.parse(guestCart);
  //         const userCartKey = `cart_${user.id}`;
  //         const userCart = JSON.parse(
  //           localStorage.getItem(userCartKey) || '[]'
  //         );

  //         parsed.forEach((item: any) => {
  //           const existing = userCart.find((p: any) => p.id === item.id);
  //           if (existing) {
  //             existing.quantity += item.quantity;
  //           } else {
  //             userCart.push(item);
  //           }
  //         });

  //         localStorage.setItem(userCartKey, JSON.stringify(userCart));
  //         localStorage.removeItem('cart_guest');
  //       }

  //       this.router.navigate(['/home']);
  //       return;
  //     }

  //     // 4️⃣ Show error
  //     this.showToastMessage('❌ Invalid email or password');
  //   }
  // }

  async onSubmit() {
    if (this.myForm.valid) {
      const { email, password } = this.myForm.value;

      // 1️⃣ Try admin login
      const adminRes = await this.sellerService.logIn({ email, password });
      if (adminRes.length === 1) {
        localStorage.setItem('admin', JSON.stringify(adminRes[0]));
        this.router.navigate(['/admin/dashboard']);
        return;
      }

      // 2️⃣ Try user login
      const userRes = await this.userService.logIn({ email, password });
      if (userRes.length === 1) {
        const user = userRes[0] as LogIn & { id: string };
        localStorage.setItem('user', JSON.stringify(user));

        // ✅ Step 3: Merge guest cart & sync with backend
        const guestCart = JSON.parse(
          localStorage.getItem('cart_guest') || '[]'
        );

        // 🛒 Try to get user's cart from backend
        this.cartService.getUserCart(user.id).subscribe((cartRes) => {
          if (cartRes.length) {
            // Cart exists → merge guest cart into it
            const existingCart = cartRes[0];
            const updatedCart = [...existingCart.items];

            guestCart.forEach((item: any) => {
              const match = updatedCart.find((p: any) => p.id === item.id);
              if (match) {
                match.quantity += item.quantity;
              } else {
                updatedCart.push(item);
              }
            });

            // Save to localStorage and backend
            localStorage.setItem(
              `cart_${user.id}`,
              JSON.stringify(updatedCart)
            );
            this.cartService
              .updateCart(existingCart.id, updatedCart)
              .subscribe();
            localStorage.removeItem('cart_guest');
          } else {
            // No cart → create one if guest cart exists
            if (guestCart.length > 0) {
              this.cartService.createCart(user.id, guestCart).subscribe(() => {
                localStorage.setItem(
                  `cart_${user.id}`,
                  JSON.stringify(guestCart)
                );
                localStorage.removeItem('cart_guest');
              });
            } else {
              // No guest cart → create empty cart
              this.cartService.createCart(user.id, []).subscribe();
            }
          }
        });

        this.router.navigate(['/home']);
        return;
      }

      // 4️⃣ Show error
      this.showToastMessage('❌ Invalid email or password');
    }
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 4000);
  }

  hideToast() {
    this.showToast = false;
  }
}
