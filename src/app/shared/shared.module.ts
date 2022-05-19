import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

@NgModule({
  declarations: [ProductComponent, ProductCartComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductComponent, ProductCartComponent],
})
export class SharedModule {}
