import { UserService } from '../../../../../core/services/user/user.service';
import { ProductCartService } from '../../../../../core/services/product-cart/productcart.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit {
  public productsCart?: any[];
  public totalPrice: number = 0;
  public userLogged?: boolean;

  @Input() public isDesktop?: boolean;
  @Input() public cartProductsLenght?: number;

  @Output() public cartProductClosed: EventEmitter<boolean> =
    new EventEmitter();
  @Output() public openFormLogin: EventEmitter<void> = new EventEmitter();

  constructor(
    private productCartService: ProductCartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.productsCart = this.productCartService.getCartProducts();
    this.userLogged = this.userService.isLoggedIn();
    this.productCartService.totalPrice.subscribe(
      (price) => (this.totalPrice = price)
    );
  }

  public closeProductCart() {
    this.cartProductClosed.emit(false);
  }

  public openForm() {
    this.openFormLogin.emit();
    this.cartProductClosed.emit(false);
  }
}
