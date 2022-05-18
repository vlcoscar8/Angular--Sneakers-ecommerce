import { ProductCartService } from '../../core/services/product-cart/productcart.service';
import { IProduct } from '../../core/services/product/model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  public cartProducts?: IProduct[];

  constructor(private cartcartService: ProductCartService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartcartService.getCartProducts();
  }
}
