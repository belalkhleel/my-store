import { Component, OnInit } from '@angular/core';
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

  products: Product[] = [];
  quantities: { [id: number]: number } = {};

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAll();
    this.products.forEach(p => this.quantities[p.id] = 1);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product, this.quantities[product.id]);
  }
}