import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRoutingModule, ReactiveFormsModule],
})
export class ProductDetailModule {}
