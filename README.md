# MyStore

MyStore is an Angular e-commerce single-page application where users can browse products, view product details, add items to a shopping cart, and complete a checkout process.

## App Flow

1. **Home / Product List** → User sees all products fetched from an external JSON API. Each product card shows the name, price, image, and an "Add to Cart" button with quantity selector.
2. **Product Detail** → Clicking a product opens a detail page showing the full description, rating, stock, and an "Add to Cart" option.
3. **Cart** → User reviews selected items, adjusts quantities, removes items, and sees the order total.
4. **Checkout** → User fills in shipping and payment information. All fields are validated in real time with error messages.
5. **Order Confirmation** → A success page is shown after a successful checkout.

## Component Hierarchy

```
AppComponent (root)
├── HeaderComponent — displays the navigation bar and cart icon with item count
├── FooterComponent — displays the footer
├── ProductListComponent (page) — fetches products via HttpClient and displays the grid
│   └── ProductCardComponent (child) — displays a single product card
│       @Input()  product  — receives product data from ProductListComponent
│       @Output() addToCart — emits { product, quantity } back to ProductListComponent
├── ProductDetailComponent (page) — shows full details of a single product
├── CartComponent (page) — displays cart items, quantities, totals, and remove buttons
├── CheckoutComponent (page) — checkout form with real-time validation using ngModelChange
└── SuccessComponent (page) — order confirmation page shown after checkout
```

## Services

- **ProductService** — fetches product data via `HttpClient` from `data.json`. Uses `shareReplay(1)` to cache the result and avoid multiple HTTP requests.
- **CartService** — manages cart state using `BehaviorSubject`. Shared across components via Angular dependency injection. Provides methods to add, remove, update quantity, and clear the cart.

## Data Sharing Between Components

- **Parent → Child**: `@Input()` decorator — `ProductListComponent` passes each `product` to `ProductCardComponent`
- **Child → Parent**: `@Output()` + `EventEmitter` — `ProductCardComponent` emits the `addToCart` event back to `ProductListComponent`
- **Sibling components**: share data via `CartService` (e.g. `HeaderComponent` reads cart count, `CartComponent` reads cart items)

## Key Features

- Products fetched from external API using `HttpClient`
- Real-time form validation with `ngModel` and `ngModelChange`
- Feedback messages when items are added to or removed from the cart
- Responsive product grid with quantity selector
- Order confirmation page after successful checkout

## Installation

```bash
npm install
```

## Running the App

```bash
ng serve
```

Navigate to `http://localhost:4200/`

## Building

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

```bash
ng test
```

## Additional Resources

- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Angular HttpClient](https://angular.dev/guide/http)
- [Angular Template-driven Forms](https://angular.dev/guide/forms)
