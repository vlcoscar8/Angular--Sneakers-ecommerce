import { ProductCartService } from './../../core/services/product-cart/productcart.service';
import { ProductsService } from './../../core/services/product/products.service';
import { IProduct } from '../../core/services/product/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product?: IProduct;
  public productId?: number;
  public mainImg?: string;
  public secondaryImg?: string[] = [];
  public sizes?: string[] = [];
  public quantity: number[] = [];
  public sizeSelected?: string;
  public quantSelected?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private productCartService: ProductCartService
  ) {}

  /**
   * Get the product id from the params listening the route
   * then get the product using the service productService calling the api
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.productId = params['id'];
    });

    /**
     * Set the product from the api
     * Set the main image of the gallery from the first image of the api
     * Set the secondary list images
     * Set the array of sizes
     * Set the quantity products on stock
     */
    this.productsService.getProductById(this.productId).subscribe((product) => {
      this.product = product;
      this.mainImg = this.product?.img[0];
      this.secondaryImg?.push(this.product.img[1]);
      this.secondaryImg?.push(this.product.img[2]);
      this.sizes = product.sizes.split(', ');

      for (let i = 1; i <= product.units; i++) {
        this.quantity.push(i);
      }
    });
  }

  /**
   * Swap the main image of the gallery by the image that the user has clicked
   * @param img The img that the user click on
   */
  public swapMain(img: string) {
    this.secondaryImg?.splice(this.secondaryImg.indexOf(img), 1);
    if (this.mainImg) {
      this.secondaryImg?.push(this.mainImg);
    }
    this.mainImg = img;
  }

  /**
   * Set the product on the list of products added to cart
   * @param obj The product object choosed by the user
   */
  public addCart(obj: IProduct) {
    this.sizeSelected === undefined
      ? (this.sizeSelected = '')
      : (obj.sizeSelected = this.sizeSelected);

    if (this.quantSelected) {
      obj.quantSelected = this.quantSelected;
    }

    if (this.sizeSelected != '') {
      this.productCartService.setCartProduct(obj);
    }
  }

  public selectSize(size: string) {
    this.sizeSelected = size;
  }

  public selectQuant(unit: number) {
    this.quantSelected = unit;
  }
}
