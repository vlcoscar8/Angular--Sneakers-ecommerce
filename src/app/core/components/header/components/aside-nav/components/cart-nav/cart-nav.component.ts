import { ProductCartService } from '../../../../../../services/product-cart/productcart.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit, OnChanges {
  public productsCart?: any[];
  public totalPrice?: number;

  @Input() public isDesktop?: boolean;
  @Input() public cartProductsLenght?: number;

  constructor(private productCartService: ProductCartService) {}

  ngOnInit(): void {
    this.productsCart = this.productCartService.getCartProducts();
  }

  ngOnChanges(): void {
    this.totalPrice = this.productCartService.getTotalPrice();
  }

  public clickRemove() {
    this.totalPrice = this.productCartService.getTotalPrice();
  }
}
