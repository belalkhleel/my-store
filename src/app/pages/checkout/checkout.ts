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

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.total = this.cartService.getTotalPrice();
  }

  onSubmit(): void {
    this.cartService.clearCart();
    this.router.navigate(['/success'], {
      state: { name: this.order.name, total: this.total }
    });
  }
}