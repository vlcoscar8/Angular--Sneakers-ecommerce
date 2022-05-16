import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductComponent],
})
export class SharedModule {}
