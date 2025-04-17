import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { LoginGuard } from './guards/loading.guard';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/check-out/check-out.component';
import { OrderHistoryComponent } from './user/order-history/order-history.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//   },
//   // {
//   //   path: '',
//   //   component: SellerAuthComponent,
//   // },
//   {
//     path: 'signup-auth',
//     component: SignupFormComponent,
//     // canActivate: [AuthGuard],
//   },
//   {
//     path: 'dashboard/',
//     component: DashboardComponent,
//     // canActivate: [AuthGuard],
//   },
//   // {
//   //   path: 'seller-home',
//   //   component: SellerHomeComponent,
//   //   canActivate: [AuthGuard],
//   // },
//   {
//     path: 'login',
//     component: LoginFormComponent,
//     // canActivate: [AuthGuard],
//   },
//   {
//     path: 'add-product',
//     component: AddProductComponent,
//   },
// ];

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'order',
    component: OrderHistoryComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'signup-auth',
    component: SignupFormComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin/admin.module').then((m) => m.AdminModule),
  },

  { path: 'product/:id', component: ProductDetailsComponent },

  { path: '**', redirectTo: 'signup-auth' },
];
