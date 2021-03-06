import { ProductCartService } from '../../services/product-cart/productcart.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public path?: string;
  public query?: string;
  public isDesktop?: boolean;
  public navClicked?: boolean = false;
  public showFilter?: boolean = false;
  public genre?: string;
  public cartProducts?: Object[];
  public cartOpened: boolean = false;
  public userNavOpened: boolean = false;

  constructor(
    private router: Router,
    private productCartService: ProductCartService
  ) {}

  @HostListener('window:resize')
  /**
   * Check if the windowWidth is desktop or mobile with a breakpoint in 500px
   */
  onResize() {
    window.innerWidth > 500
      ? (this.isDesktop = true)
      : (this.isDesktop = false);
  }

  /**
   * First, toggle the variable isDesktop to true or false depending on the windowdHeight
   * Second, set the query and the path listening the router path
   * Third, get the products added by the user to the cart list
   */
  ngOnInit(): void {
    window.innerWidth > 500
      ? (this.isDesktop = true)
      : (this.isDesktop = false);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.query = e.url.split(';')[1];
        this.path = e.url.split(';')[0];
      }
    });

    this.cartProducts = this.productCartService.getCartProducts();
  }

  /**
   * Toogle the navClicked variable to use in the style of the nav button
   */
  public btnClick() {
    this.navClicked = !this.navClicked;
  }

  /**
   * This function toggle the filter below the header and set the genre to pass it to the query params later.
   * @param text The value of the link, it could be 'Woman' or 'Man'
   */
  public setGenre(text?: string) {
    if (this.genre === text && this.showFilter) {
      this.showFilter = false;
    } else {
      this.genre = text;
      this.showFilter = true;
    }
  }

  /**
   * Close the filter when the user click on them
   */
  public closeFilter() {
    this.showFilter = false;
    this.cartOpened = false;
    this.userNavOpened = false;
  }

  /**
   * Open the cart nav when the user click on the icon
   */
  public openCart() {
    this.cartOpened = !this.cartOpened;
    this.userNavOpened = false;
  }

  /**
   * Open the user nav when the user click on the icon
   */
  public openUserNav() {
    this.userNavOpened = !this.userNavOpened;
    this.cartOpened = false;
  }

  /**
   * Close the user nav when the user click on login or register
   */
  public userNavClosed(value: boolean) {
    this.userNavOpened = value;
  }

  /**
   * Close the cart nav when the user click on see the products to buy
   */
  public cartNavClosed(value: boolean) {
    this.cartOpened = value;
  }
}
