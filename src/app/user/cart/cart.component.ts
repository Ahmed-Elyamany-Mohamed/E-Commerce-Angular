import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, RouterLink],
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
    this.cartService.cartChanged.subscribe(() => this.loadCart()); // live update
  }

  loadCart() {
    this.cart = this.cartService.getCart();
  }

  increaseQty(product: any) {
    this.cartService.addToCart(product, 1);
  }

  decreaseQty(product: any) {
    this.cartService.updateQuantity(product.id, product.quantity - 1);
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
  }

  get total() {
    return this.cart.reduce(
      (acc, item) => acc + item.productPrice * item.quantity,
      0
    );
  }
}
