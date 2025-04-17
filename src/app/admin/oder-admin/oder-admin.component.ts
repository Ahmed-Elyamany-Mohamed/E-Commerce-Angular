import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './oder-admin.component.html',
  styleUrls: ['./oder-admin.component.css'],
  imports: [CommonModule],
})
export class OrdersAdminComponent implements OnInit {
  orders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.http.get<any[]>(`${environment.baseUrl}/orders`).subscribe((res) => {
      this.orders = res;
    });
  }

  updateStatus(orderId: string, newStatus: string): void {
    // Optional: update the UI immediately
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = newStatus;
    }

    // Send PATCH request to update in backend
    this.http
      .patch(`${environment.baseUrl}/orders/${orderId}`, {
        status: newStatus,
      })
      .subscribe({
        next: () => {
          console.log(`Order ${orderId} updated to ${newStatus}`);
        },
        error: (err) => {
          console.error('Error updating status:', err);
        },
      });
  }
}
