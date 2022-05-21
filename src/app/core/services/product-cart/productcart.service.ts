import { IProduct } from '../product/model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  public cartProducts: object[] = [];

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
  public setCartProduct(product: IProduct, size: string, units: number) {
    const productCartObject = {
      product: product,
      size: size,
      units: units,
    };
    this.cartProducts.push(productCartObject);

    console.log(this.cartProducts);
  }
}
