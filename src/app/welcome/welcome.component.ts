import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [CommonModule],
})
export class WelcomeComponent implements OnInit {
  userName: string = 'Guest';
  isAdmin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    const adminData = localStorage.getItem('admin');
    if (userData) {
      const user = JSON.parse(userData);
      this.userName = user.name || 'User';
    } else if (adminData) {
      const admin = JSON.parse(adminData);
      this.userName = admin.name || 'Admin';
      this.isAdmin = true;
    }
  }

  goToShop() {
    this.router.navigate(['/home']);
  }
}
