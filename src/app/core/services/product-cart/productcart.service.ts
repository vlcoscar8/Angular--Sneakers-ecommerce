import { IProduct } from '../../../shared/components/product/model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  public cartProducts?: IProduct[] = [];

  constructor() {}

  public getCartProducts() {
    return this.cartProducts;
  }

  public setCartProduct(product: IProduct) {
    this.cartProducts?.includes(product)
      ? this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
      : this.cartProducts?.push(product);
  }
}
