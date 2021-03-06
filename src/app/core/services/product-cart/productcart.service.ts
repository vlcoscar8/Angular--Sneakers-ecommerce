import { ReplaySubject, Subject } from 'rxjs';
import { IProduct } from '../product/model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  public cartProducts: any[] = [];
  public totalPrice: ReplaySubject<number> = new ReplaySubject();
  public existProducts: ReplaySubject<boolean> = new ReplaySubject();

  constructor() {}

  /**
   * Get the product list added to cart
   * @returns The list of products setted before by the user
   */
  public getCartProducts() {
    return this.cartProducts;
  }

  /**
   * Set the product on the product cart list
   * and set the total price of the products in the list
   * @param product The product object choosed by the user
   */
  public setCartProduct(product: IProduct, size: string, units: number) {
    const productCartObject: any = {
      product: product,
      size: size,
      units: units,
    };

    this.cartProducts.push(productCartObject);

    let price = 0;

    this.cartProducts.forEach((product) => {
      price += product.product.price * product.units;
    });

    this.totalPrice.next(price);

    this.existProducts.next(true);
  }

  /**
   * Filter the cart Product array and get the product which is the same as the user has clicked and remove it
   * @param product The product info that the user wants to delete
   */
  public removeCartProduct(product: any) {
    const deletedProduct: any[] = this.cartProducts.filter(
      (productCart) =>
        productCart.product.id === product.product.id &&
        productCart.size === product.size &&
        productCart.units === product.units
    );

    this.cartProducts.splice(this.cartProducts.indexOf(deletedProduct), 1);

    this.totalPrice.next(product.product.price * product.units);

    if (this.cartProducts.length === 0) {
      this.existProducts.next(false);
      this.totalPrice.next(0);
    }
  }

  public getTotalPrice() {
    return this.totalPrice;
  }
}
