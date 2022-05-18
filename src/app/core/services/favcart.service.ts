import { IProduct } from './../../shared/components/product/model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavcartService {
  public favProducts?: IProduct[] = [];

  constructor() {}

  public getFavProducts() {
    return this.favProducts;
  }

  public setFavProduct(product: IProduct) {
    this.favProducts?.includes(product)
      ? this.favProducts.splice(this.favProducts.indexOf(product), 1)
      : this.favProducts?.push(product);
  }
}
