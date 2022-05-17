import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavCartRoutingModule } from './fav-cart-routing.module';
import { FavCartComponent } from './fav-cart.component';

@NgModule({
  declarations: [FavCartComponent],
  imports: [CommonModule, FavCartRoutingModule, SharedModule],
})
export class FavCartModule {}