// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private storageKey = 'cart';

//   constructor() {}

//   getCart() {
//     const cart = localStorage.getItem(this.storageKey);
//     return cart ? JSON.parse(cart) : [];
//   }

//   addToCart(product: any, quantity: number = 1) {
//     let cart = this.getCart();

//     const existing = cart.find((item: any) => item.id === product.id);
//     if (existing) {
//       existing.quantity += quantity;
//     } else {
//       cart.push({ ...product, quantity });
//     }

//     localStorage.setItem(this.storageKey, JSON.stringify(cart));
//   }

//   removeFromCart(productId: string) {
//     let cart = this.getCart();
//     cart = cart.filter((item: any) => item.id !== productId);
//     localStorage.setItem(this.storageKey, JSON.stringify(cart));
//   }

//   clearCart() {
//     localStorage.removeItem(this.storageKey);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartChanged = new BehaviorSubject<void>(undefined); // live update trigger

  constructor(private http: HttpClient) {}
  // getCart(): any[] {
  //   const cart = localStorage.getItem(this.storageKey);
  //   return cart ? JSON.parse(cart) : [];
  // }
  getCartKey(): string {
    const user = localStorage.getItem('user');
    const userId = user ? JSON.parse(user).id : 'guest';
    return `cart_${userId}`;
  }

  getCart(): any[] {
    const cart = localStorage.getItem(this.getCartKey());
    try {
      const parsed = JSON.parse(cart || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  addToCart(product: any, quantity: number = 1) {
    let cart = this.getCart();
    const existing = cart.find((item: any) => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    this.saveCart(cart);
  }

  updateQuantity(id: string, quantity: number) {
    let cart = this.getCart();
    const item = cart.find((item: any) => item.id === id);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(id);
        return;
      }
      item.quantity = quantity;
      this.saveCart(cart);
    }
  }

  removeFromCart(id: string) {
    let cart = this.getCart().filter((item: any) => item.id !== id);
    this.saveCart(cart);
  }

  saveCart(cart: any[]) {
    localStorage.setItem(this.getCartKey(), JSON.stringify(cart));
    this.cartChanged.next(); // emit change
  }

  getUserCart(userId: string) {
    return this.http.get<any[]>(`${environment.baseUrl}/cart?userId=${userId}`);
  }

  createCart(userId: string, items: any[]) {
    return this.http.post(`${environment.baseUrl}/cart`, { userId, items });
  }

  updateCart(cartId: number, items: any[]) {
    return this.http.patch(`${environment.baseUrl}/cart/${cartId}`, { items });
  }
  removeCart(cartId: number) {
    return this.http.delete(`${environment.baseUrl}/cart/${cartId}`);
  }
}
