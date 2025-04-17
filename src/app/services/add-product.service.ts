import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AddProduct } from '../../sign-up.model';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  products: any[] = [];
  private searchResult = new BehaviorSubject<AddProduct[]>([]);
  searchResult$ = this.searchResult.asObservable(); // expose as observable

  constructor(private http: HttpClient, private router: Router) {}
  addProduct(data: AddProduct) {
    return this.http
      .post(`${environment.baseUrl}/products`, data, { observe: 'response' })
      .subscribe((res) => {
        console.warn(res.body);
      });
  }
  // add-product.service.ts
  getProducts(): Observable<AddProduct[]> {
    return this.http.get<AddProduct[]>(`${environment.baseUrl}/products`);
  }

  deleteProduct(id: string) {
    return this.http.delete<AddProduct[]>(
      `${environment.baseUrl}/products/${id}`
    );
  }

  getProductById(id: string) {
    return this.http.get(`${environment.baseUrl}/products/${id}`);
  }

  updateProduct(id: string, data: any) {
    return this.http.put(`${environment.baseUrl}/products/${id}`, data);
  }

  // searchProduct(_query: string) {
  //   return this.http.get<AddProduct[]>(`http://localhost:3000/products`);
  // }
  // ?category=${query}
  searchProduct(query: string) {
    return this.http
      .get<AddProduct[]>(`${environment.baseUrl}/products`)
      .subscribe((all) => {
        const filtered = all.filter(
          (p) =>
            p.productName.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        );

        this.searchResult.next(filtered); // 🔥 send result to whoever is listening
      });
  }

  // loadProducts() {
  //   this.getProducts().subscribe((data: any) => {
  //     this.products = data;
  //   });
  // }
  loadAllProducts() {
    return this.http
      .get<AddProduct[]>(`${environment.baseUrl}/products`)
      .subscribe((all) => {
        this.searchResult.next(all);
      });
  }
}
