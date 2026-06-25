import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existing = this.items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    this.cartSubject.next([...this.items]);
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.cartSubject.next([...this.items]);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartSubject.next([...this.items]);
      }
    }
  }

  getTotalCount(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
    this.cartSubject.next([]);
  }
}