import { ProductsService } from './../../core/services/product/products.service';
import { UserService } from './../../core/services/user/user.service';
import { IProduct } from 'src/app/core/services/product/model/product.model';
import { ProductCartService } from './../../core/services/product-cart/productcart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.scss'],
})
export class ProductBuyComponent implements OnInit {
  public products: any[] = [];
  public totalPrice: number = 0;
  public buyFinished: boolean = false;
  public buyOK: boolean = false;

  constructor(
    private productCartService: ProductCartService,
    private userService: UserService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.productCartService.getCartProducts();
    this.productCartService.totalPrice.subscribe(
      (price) => (this.totalPrice = price)
    );
    this.buyOK = false;
  }

  public buyProduct() {
    this.buyFinished = true;

    let userId = this.userService.userId();

    this.products.forEach((product) => {
      const bodyProduct = {
        productId: product.product.id,
        quantity: product.units,
        size: product.size,
      };

      this.productsService.buyProduct(userId, bodyProduct).subscribe({
        next: (res) => {
          this.buyFinished = false;
          this.products.forEach((product) =>
            this.productCartService.removeCartProduct(product)
          );
          this.buyOK = true;
        },
        error: (err) => console.log(err),
      });
    });
  }
}
