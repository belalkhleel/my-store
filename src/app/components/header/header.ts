import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getTotalCount();
    });
  }
}