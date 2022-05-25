import { IProduct } from 'src/app/core/services/product/model/product.model';
import { ProductCartService } from './../../core/services/product-cart/productcart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.scss'],
})
export class ProductBuyComponent implements OnInit {
  public products: IProduct[] = [];
  public totalPrice: number = 0;

  constructor(private productCartService: ProductCartService) {}

  ngOnInit(): void {
    this.products = this.productCartService.getCartProducts();
    this.productCartService.totalPrice.subscribe(
      (price) => (this.totalPrice = price)
    );
  }
}
