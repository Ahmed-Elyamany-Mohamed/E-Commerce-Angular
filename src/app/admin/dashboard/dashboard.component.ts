import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddProductService } from '../../services/add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isDeleted: string = '';
  products: any[] = [];
  notFound = 'No results found. Try a different search.';

  constructor(
    private productService: AddProductService,
    private router: Router
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

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((res) => {
      if (res) {
        this.isDeleted = 'Product Deleted';
        this.loadProducts();
      }
    });
    setTimeout(() => {
      this.isDeleted = '';
    }, 3000);
  }
  onEdit(id: string) {
    this.router.navigate(['/admin/add-product', id]);
  }
}
