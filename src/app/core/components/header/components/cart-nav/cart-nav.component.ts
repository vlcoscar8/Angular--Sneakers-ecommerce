import { ProductCartService } from './../../../../services/product-cart/productcart.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/services/product/model/product.model';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit {
  public productsCart?: IProduct[];

  constructor(private productCartService: ProductCartService) {}

  ngOnInit(): void {
    this.productsCart = this.productCartService.getCartProducts();
    console.log(this.productsCart);
  }
}
