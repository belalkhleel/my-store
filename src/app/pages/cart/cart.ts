import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  items: CartItem[] = [];
  feedbackMessage = '';  

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.items = items;
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  remove(productId: number): void {
    const item = this.items.find(i => i.product.id === productId);  
    this.cartService.removeFromCart(productId);
    if (item) {                                                      
      this.feedbackMessage = `"${item.product.name}" removed from cart.`;
      setTimeout(() => this.feedbackMessage = '', 3000);
    }
  }

  getTotal(): number {
    return this.cartService.getTotalPrice();
  }
}