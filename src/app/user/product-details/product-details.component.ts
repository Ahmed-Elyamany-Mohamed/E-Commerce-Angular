import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AddProductService } from '../../services/add-product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: any;
  quantity: number = 1;
  removeItemCart = true;

  constructor(
    private route: ActivatedRoute,
    private productService: AddProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((res) => {
        this.product = res;
        this.checkIfInCart();
      });
    }
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    // if (this.product) {
    //   this.cartService.addToCart(this.product, this.quantity);
    //   this.removeItemCart = false;
    // }
    this.cartService.addToCart(this.product, this.quantity);
    this.removeItemCart = false;
  }
  checkIfInCart() {
    const cart = this.cartService.getCart();
    this.removeItemCart = !cart.some(
      (item: any) => item.id === this.product.id
    );
  }

  removeFromCart(_id: any) {
    this.cartService.removeFromCart(this.product.id);
    this.removeItemCart = true;
  }
}
