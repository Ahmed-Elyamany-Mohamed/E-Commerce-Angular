import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
  imports: [CommonModule, RouterLink],
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];
  userId: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsed = JSON.parse(userData);
      this.userId = parsed.id;
      this.fetchOrders();
    }
  }

  fetchOrders() {
    this.http
      .get<any[]>(`${environment.baseUrl}/orders?userId=${this.userId}`)
      .subscribe({
        next: (res) => {
          this.orders = res.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
        },
        error: (err) => {
          console.error('Error fetching orders:', err);
        },
      });
  }

  deleteOrder(orderId: string): void {
    this.http.delete(`http://localhost:3000/orders/${orderId}`).subscribe({
      next: () => {
        // Remove from UI
        this.orders = this.orders.filter((o) => o.id !== orderId);
        alert('❌ Order cancelled successfully.');
      },
      error: () => {
        alert('⚠️ Failed to cancel order.');
      },
    });
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  getStatusStyle(status: string): string {
    switch (status) {
      case 'pending':
        return 'badge bg-warning text-dark';
      case 'shipped':
        return 'badge bg-primary';
      case 'delivered':
        return 'badge bg-success';
      case 'canceled':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}
