import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PaginationService } from './services/pagination/pagination.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { UserService } from './services/user/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ExitGuard } from './guards/exit/exit.guard';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResponsiveNavComponent,
    NavBtnComponent,
    HeaderFilterComponent,
  ],
  providers: [
    ProductCartService,
    ProductsService,
    UserService,
    PaginationService,
    AuthGuard,
    ExitGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
