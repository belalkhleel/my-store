import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products$!: Observable<Product[]>;
  feedbackMessage = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  handleAddToCart(event: { product: Product, quantity: number }): void {
    this.cartService.addToCart(event.product, event.quantity);
    this.ngZone.run(() => {
      this.feedbackMessage = `"${event.product.name}" added to cart!`;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.feedbackMessage = '';
        this.cdr.detectChanges();
      }, 3000);
    });
  }
}