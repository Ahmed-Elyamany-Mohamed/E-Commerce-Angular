import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AddProductService } from '../../services/add-product.service';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productMsg: string = '';
  myForm!: FormGroup;
  productName!: FormControl;
  productPrice!: FormControl;
  category!: FormControl;
  description!: FormControl;
  img!: FormControl;

  submitted = false;
  isLoading = false;
  showToast = false;
  isEditMode = false;
  productId!: string;
  toastMessage = '';

  showLoginForm: boolean = false;
  authError: string = '';

  constructor(
    private productService: AddProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initFormControl();
    this.createForm();
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = params['id'];
        this.loadProductData(this.productId);
      }
    });
  }
  loadProductData(id: string) {
    this.productService.getProductById(id).subscribe((product: any) => {
      this.myForm.patchValue({
        productName: product.productName,
        productPrice: product.productPrice,
        category: product.category,
        description: product.description,
        img: product.img,
        id: product.id,
      });
      this.previewImage = product.img; // ✅ Show preview when editing
    });
  }

  initFormControl() {
    this.productName = new FormControl('', [Validators.required]);
    this.productPrice = new FormControl('', [Validators.required]);
    this.category = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.img = new FormControl('', [Validators.required]);
    // this.message = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myForm = new FormGroup({
      productName: this.productName,
      productPrice: this.productPrice,
      category: this.category,
      description: this.description,
      img: this.img,
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.submitted = true;
    if (this.myForm.invalid) {
      this.showToastMessage('Please fill all required fields.');
      return;
    }
    console.log(this.myForm.value);
    if (this.isEditMode) {
      // Update logic
      this.productService
        .updateProduct(this.productId, this.myForm.value)
        .subscribe(() => {
          this.productMsg = '✅ Product Updated Successfully!';
        });
      this.myForm.reset();
      this.showToast = false;
      this.isLoading = false;
      this.router.navigate(['/admin/dashboard']);
    } else {
      if (this.myForm.valid) {
        console.log(this.myForm.value);
        this.productService.addProduct(this.myForm.value);
        this.productMsg = 'Product Added Successfully';
        this.myForm.reset();
        this.router.navigate(['/admin/dashboard']);
        this.showToast = false;
        this.isLoading = false;
      }
    }
  }

  previewImage: string = '';

  onImageUpload(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.myForm.patchValue({ img: this.previewImage }); // Set base64 to form
      };
      reader.readAsDataURL(file); // Convert to base64
    }
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
