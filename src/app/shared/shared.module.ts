import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SortPricePipe } from './pipes/sortPrice/sort-price.pipe';
import { UniqueValuesPipe } from './pipes/uniqueValues/unique-values.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCartComponent,
    FilterPipe,
    SortPricePipe,
    UniqueValuesPipe,
    PaginationPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ProductComponent,
    ProductCartComponent,
    FilterPipe,
    SortPricePipe,
    UniqueValuesPipe,
    PaginationPipe,
  ],
})
export class SharedModule {}
