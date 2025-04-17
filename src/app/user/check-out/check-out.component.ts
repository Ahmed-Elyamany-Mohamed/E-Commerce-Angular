import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css',
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  cart: any[] = [];
  total: number = 0;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const cartKey = user.id ? `cart_${user.id}` : 'cart_guest';

    this.cart = JSON.parse(localStorage.getItem(cartKey) || '[]');

    this.total = this.cart.reduce(
      (sum, item) => sum + item.productPrice * item.quantity,
      0
    );

    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^\\+?[0-9]{10,15}$'), // Allows optional '+' and 10-15 digits
          Validators.minLength(10),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  // onCheckout() {
  //   const order = {
  //     ...this.checkoutForm.value,
  //     items: this.cart,
  //     total: this.total,
  //     date: new Date(),
  //   };

  //   // Save order to localStorage or backend
  //   const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  //   orders.push(order);
  //   localStorage.setItem('orders', JSON.stringify(orders));

  //   // Clear cart
  //   const user = JSON.parse(localStorage.getItem('user') || '{}');
  //   const cartKey = user.id ? `cart_${user.id}` : 'cart_guest';
  //   localStorage.removeItem(cartKey);

  //   alert('✅ Order placed successfully!');
  // }

  onCheckout() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const cartKey = user.id ? `cart_${user.id}` : 'cart_guest';

    const order = {
      ...this.checkoutForm.value,
      userId: user?.id || 'guest',
      items: this.cart,
      total: this.total,
      date: new Date(),
    };

    this.http.post(`${environment.baseUrl}/orders`, order).subscribe({
      next: () => {
        // localStorage.removeItem(cartKey);
        localStorage.setItem(cartKey, order); // Clear cart in localStorage
        alert('✅ Order saved to server!');
        this.checkoutForm.reset(); // Reset the form after successful order placement
        this.cart = []; // Clear the cart array
      },
      error: () => {
        alert('❌ Failed to save order. Try again.');
      },
    });
  }
}
