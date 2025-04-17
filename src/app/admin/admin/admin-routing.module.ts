import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthGuard } from '../../guards/auth.guard';
import { OrdersAdminComponent } from '../oder-admin/oder-admin.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'add-product/:id', component: AddProductComponent },
      { path: 'orders', component: OrdersAdminComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
