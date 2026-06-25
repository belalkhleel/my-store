import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list'
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Checkout} from './pages/checkout/checkout';
import { Success } from './pages/success/success';

const routes: Routes = [
  { path: '',            component: ProductList },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart',        component: Cart },
  { path: 'checkout',    component: Checkout },
  { path: 'success',     component: Success },
  { path: '**',          redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}