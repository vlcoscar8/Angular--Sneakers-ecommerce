import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductBuyRoutingModule } from './product-buy-routing.module';
import { ProductBuyComponent } from './product-buy.component';

@NgModule({
  declarations: [ProductBuyComponent],
  imports: [CommonModule, ProductBuyRoutingModule, SharedModule],
})
export class ProductBuyModule {}
