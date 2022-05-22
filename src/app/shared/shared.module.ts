import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { CalcPricePipe } from './pipes/calcPrice/calc-price.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCartComponent,
    FilterPipe,
    CalcPricePipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ProductComponent, ProductCartComponent, FilterPipe, CalcPricePipe],
})
export class SharedModule {}
