import { ProductCartService } from './../../../../services/product-cart/productcart.service';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit, OnChanges {
  public productsCart?: Object[];
  public totalPrice?: number;

  @Input() public cartOpened?: boolean;
  @Input() public isDesktop?: boolean;

  constructor(private productCartService: ProductCartService) {}

  ngOnInit(): void {
    this.productsCart = this.productCartService.getCartProducts();
  }

  ngOnChanges(): void {
    this.totalPrice = this.productCartService.getTotalPrice();
  }
}
