import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartRoutingModule } from './product-cart-routing.module';
import { ProductCartComponent } from './product-cart.component';

@NgModule({
  declarations: [ProductCartComponent],
  imports: [CommonModule, ProductCartRoutingModule, SharedModule],
})
export class ProductCartModule {}
