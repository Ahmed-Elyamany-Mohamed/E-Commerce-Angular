import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AddProductService } from '../services/add-product.service';
import { AddProduct } from '../../sign-up.model';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuType: 'default' | 'admin' | 'user' = 'default';
  adminName: string = '';
  cart: any[] = [];
  cartCount: number = 0;

  constructor(
    private route: Router,
    private search: AddProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    // ? this to fetch the route to check if the user loggedIn : to your conditions
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        this.setMenuType();
      }
    });
    this.setMenuType();
    this.updateCartCount();
    this.loadCart();
    this.cartService.cartChanged.subscribe(() => this.loadCart());
  }
  setMenuType() {
    if (localStorage.getItem('admin')) {
      this.menuType = 'admin';
    } else if (localStorage.getItem('user')) {
      this.menuType = 'user';
    } else {
      this.menuType = 'default';
    }
    console.log(this.menuType);
  }
  logOut() {
    localStorage.removeItem('admin');
    localStorage.removeItem('user');
    this.route.navigate(['']);
  }
  isAdminRoute(url: string): boolean {
    return localStorage.getItem('admin') !== null && url.startsWith('/admin');
  }

  // searchProduct(query: KeyboardEvent) {
  //   if (query) {
  //     const element = query.target as HTMLInputElement;
  //     console.log(element.value);
  //     this.search.searchProduct(element.value).subscribe((res) => {
  //       console.log(res);
  //     });
  //   }
  // }
  products: AddProduct[] = [];

  // searchProduct(event: KeyboardEvent) {
  //   const input = (event.target as HTMLInputElement).value.trim().toLowerCase();

  //   if (input) {
  //     this.search.searchProduct('').subscribe((products) => {
  //       const filtered = products.filter(
  //         (p) =>
  //           p.productName.toLowerCase().includes(input) ||
  //           p.category.toLowerCase().includes(input)
  //       );
  //       console.log(input);

  //       this.products = filtered; // ✅ bind result to your product list
  //       console.log(filtered);
  //     });
  //   } else {
  //     this.search.searchProduct('').subscribe((all) => (this.products = all));    }
  // }

  searchProduct(event: KeyboardEvent) {
    const query = (event.target as HTMLInputElement).value.trim();
    this.search.searchProduct(query); // ✅ this will update the stream in the service
  }

  updateCartCount() {
    const cart = this.cartService.getCart();
    this.cartCount = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    );
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}
