import { IProduct } from '../product/model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  public cartProducts: any[] = [];

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
    const productCartObject: Object = {
      product: product,
      size: size,
      units: units,
    };
    this.cartProducts.push(productCartObject);
  }

  /**
   * Filter the cart Product array and get the product which is the same as the user has clicked and remove it
   * @param product The product info that the user wants to delete
   */
  public removeCartProduct(product: any) {
    console.log(this.cartProducts);
    const deletedProduct: any[] = this.cartProducts.filter(
      (productCart) =>
        productCart.product.id === product.product.id &&
        productCart.size === product.size &&
        productCart.units === product.units
    );

    this.cartProducts.splice(this.cartProducts.indexOf(deletedProduct), 1);
  }
}
