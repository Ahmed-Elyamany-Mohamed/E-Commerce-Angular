import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { EmailValidatorService } from '../../validators/email-validator';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent implements OnInit {
  myForm!: FormGroup;
  name!: FormControl;
  email!: FormControl;
  password!: FormControl;

  submitted = false;
  isLoading = false;
  toastMessage: string = '';
  showToast: boolean = false;

  showLoginForm: boolean = false;
  authError: string = '';

  constructor(
    private sellerService: SellerService,
    private userService: UserService,
    private emailValidator: EmailValidatorService
  ) {
    this.initFormControl();
    this.createForm();
  }

  initFormControl() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
    this.email = new FormControl(
      '',
      [Validators.required, Validators.email],
      [this.emailValidator.checkEmailNotTaken()]
    );
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {
    this.sellerService.reLoadSeller();
  }
  // onSubmit() {
  //   this.submitted = true;
  //   console.log(this.myForm.value);

  //   if (this.myForm.valid) {
  //     console.log(this.myForm.value);
  //     this.sellerService.signUp(this.myForm.value);
  //   }

  //   if (this.myForm.invalid) {
  //     this.showToastMessage('Please fill all required fields.');
  //     return;
  //   }
  //   this.isLoading = true;
  // }

  onSubmit() {
    if (this.myForm.valid) {
      this.userService.signUp(
        this.myForm.value,
        this.showToastMessage.bind(this)
      );
    } else {
      // alert('❗ Please fill in all required fields.');
      this.showToastMessage('⚠️ Please fill all required fields.');
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
