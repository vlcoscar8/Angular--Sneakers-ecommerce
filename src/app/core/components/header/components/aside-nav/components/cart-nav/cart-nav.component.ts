import { UserService } from './../../../../../../services/user/user.service';
import { ProductCartService } from '../../../../../../services/product-cart/productcart.service';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss'],
})
export class CartNavComponent implements OnInit, OnChanges {
  public productsCart?: any[];
  public totalPrice?: number;
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
  }

  ngOnChanges(): void {
    this.totalPrice = this.productCartService.getTotalPrice();
  }

  public clickRemove() {
    this.totalPrice = this.productCartService.getTotalPrice();
  }

  public closeProductCart() {
    this.cartProductClosed.emit(false);
  }

  public openForm() {
    this.openFormLogin.emit();
    this.cartProductClosed.emit(false);
  }
}
