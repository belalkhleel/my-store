import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

  order = {
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
    expiry: '',
    cvv: ''
  };

  total = 0;

  nameError = '';
  emailError = '';
  addressError = '';
  cityError = '';
  zipError = '';
  cardError = '';
  expiryError = '';
  cvvError = '';

  constructor(private cartService: CartService, private router: Router) {
    this.total = this.cartService.getTotalPrice();
  }

  validateName() {
    this.nameError = this.order.name.trim().length < 2 ? 'Full name is required.' : '';
  }

  validateEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = re.test(this.order.email) ? '' : 'Enter a valid email address.';
  }

  validateAddress() {
    this.addressError = this.order.address.trim().length < 5 ? 'Address is required.' : '';
  }

  validateCity() {
    this.cityError = this.order.city.trim().length < 2 ? 'City is required.' : '';
  }

  validateZip() {
    this.zipError = /^\d{4,10}$/.test(this.order.zip) ? '' : 'Enter a valid ZIP code.';
  }

  validateCard() {
    const digits = this.order.card.replace(/\s/g, '');
    this.cardError = /^\d{16}$/.test(digits) ? '' : 'Card number must be 16 digits.';
  }

  validateExpiry() {
    this.expiryError = /^(0[1-9]|1[0-2])\/\d{2}$/.test(this.order.expiry) ? '' : 'Use MM/YY format.';
  }

  validateCvv() {
    this.cvvError = /^\d{3}$/.test(this.order.cvv) ? '' : 'CVV must be 3 digits.';
  }

  onSubmit(): void {
    this.cartService.clearCart();
    this.router.navigate(['/success'], {
      state: { name: this.order.name, total: this.total }
    });
  }
}