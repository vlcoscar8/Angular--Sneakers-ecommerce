import { UserNavComponent } from './components/user-nav/user-nav.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss'],
})
export class AsideNavComponent {
  public buttonClicked: string = '';

  @Input() public userNavOpened: boolean = false;
  @Input() public cartOpened: boolean = false;
  @Input() public isDesktop?: boolean;
  @Input() public cartProductsLenght?: number;
  @Input() public cartProducts?: Object[];

  @Output() public userNavClosed: EventEmitter<boolean> = new EventEmitter();
  @Output() public cartNavClosed: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  public closeNav(value: boolean) {
    this.userNavOpened = value;
    this.userNavClosed.emit(value);
  }

  public cartProductClosed(value: boolean) {
    this.cartOpened = value;
    this.cartNavClosed.emit(value);
  }

  public openFormLogin() {
    this.userNavClosed.emit(true);
  }
}
