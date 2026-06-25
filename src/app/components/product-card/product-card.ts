import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{ product: Product, quantity: number }>();

  quantity = 1;

  onAddToCart(): void {
    this.addToCart.emit({ product: this.product, quantity: this.quantity });
  }
}