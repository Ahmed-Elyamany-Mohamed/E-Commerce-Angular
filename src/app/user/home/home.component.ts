import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../../services/add-product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterLink],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  showToast = false;
  toastMessage: string = '';
  notFound = 'No results found. Try a different search.';
  constructor(
    private productService: AddProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.searchResult$.subscribe((data) => {
      this.products = data;
    });
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product, 1);
    // this.alert('✅ Added to cart!');
    // showToast('✅ Added to cart!');
    this.showToastMessage.bind(this)
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
