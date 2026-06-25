import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Quantum Noise Cancelling Headphones',
      price: 299,
      description: 'Immersive 40-hour battery, adaptive ANC, and spatial audio. Built for focus in any environment.',
      category: 'Audio',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      rating: 4.8,
      stock: 12
    },
    {
      id: 2,
      name: 'Aero Mechanical Keyboard',
      price: 179,
      description: 'Low-profile tactile switches, RGB per-key lighting, and aluminum chassis with zero flex.',
      category: 'Peripherals',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
      rating: 4.6,
      stock: 8
    },
    {
      id: 3,
      name: 'Phantom Wireless Mouse',
      price: 89,
      description: '26,000 DPI optical sensor, 70-hour battery, and ultralight 58g frame.',
      category: 'Peripherals',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
      rating: 4.7,
      stock: 20
    },
    {
      id: 4,
      name: 'Nova 4K Monitor 27"',
      price: 549,
      description: 'IPS panel, 144Hz refresh rate, HDR600, and factory-calibrated color accuracy.',
      category: 'Displays',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80',
      rating: 4.9,
      stock: 5
    },
    {
      id: 5,
      name: 'Stealth Webcam Pro',
      price: 129,
      description: '4K 60fps, HDR, dual noise-cancelling mics, and auto-framing AI.',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1587751077322-a0e0c8817e4f?w=600&q=80',
      rating: 4.5,
      stock: 15
    },
    {
      id: 6,
      name: 'Carbon Fiber Desk Mat',
      price: 49,
      description: 'XL 900x400mm, stitched edges, non-slip base. The finishing touch for any minimal desk setup.',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
      rating: 4.4,
      stock: 50
    }
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }
}