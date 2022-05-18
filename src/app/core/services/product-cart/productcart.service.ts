import { IProduct } from '../product/model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  public cartProducts?: IProduct[] = [];

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
   * @param product The product object choosed by the user
   */
  public setCartProduct(product: IProduct) {
    this.cartProducts?.includes(product)
      ? this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
      : this.cartProducts?.push(product);
  }
}
