import { ProductCartService } from '../../../core/services/product-cart/productcart.service';
import { IProduct } from '../../../core/services/product/model/product.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() public product?: IProduct;
  constructor(private productCartService: ProductCartService) {}

  ngOnInit(): void {}

/**
 * Set the product on the list of products added to cart
 * @param obj The product object choosed by the user
 */
  public addFav(obj: IProduct) {
    this.productCartService.setCartProduct(obj);
  }

  ngOnDestroy(): void {}
}
