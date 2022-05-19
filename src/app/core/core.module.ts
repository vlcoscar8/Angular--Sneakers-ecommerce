import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/product/products.service';
import { ProductCartService } from './services/product-cart/productcart.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResponsiveNavComponent } from './components/header/components/responsive-nav/responsive-nav.component';
import { NavBtnComponent } from './components/header/components/nav-btn/nav-btn.component';
import { HeaderFilterComponent } from './components/header/components/header-filter/header-filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResponsiveNavComponent,
    NavBtnComponent,
    HeaderFilterComponent,
  ],
  providers: [ProductCartService, ProductsService],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
