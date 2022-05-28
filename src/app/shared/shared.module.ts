import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPricePipe } from './pipes/sortPrice/sort-price.pipe';
import { UniqueValuesPipe } from './pipes/uniqueValues/unique-values.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { CartNavComponent } from './components/aside-nav/components/cart-nav/cart-nav.component';
import { UserNavComponent } from './components/aside-nav/components/user-nav/user-nav.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCartComponent,
    FilterPipe,
    SortPricePipe,
    UniqueValuesPipe,
    PaginationPipe,
    AsideNavComponent,
    CartNavComponent,
    UserNavComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    ProductComponent,
    ProductCartComponent,
    FilterPipe,
    SortPricePipe,
    UniqueValuesPipe,
    PaginationPipe,
    AsideNavComponent,
  ],
})
export class SharedModule {}
