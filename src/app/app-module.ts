import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Success } from './pages/success/success';
import { ProductCard } from './components/product-card/product-card';

@NgModule({
declarations: [
    App,
    Header,
    Footer,
    ProductCard,
    ProductList,
    ProductDetail,
    Cart,
    Checkout,
    Success,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideClientHydration(withEventReplay()), provideHttpClient(withFetch())],
  bootstrap: [App],
})
export class AppModule {}
