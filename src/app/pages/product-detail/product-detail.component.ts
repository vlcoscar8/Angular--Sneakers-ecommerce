import { switchMap } from 'rxjs';
import { ProductCartService } from './../../core/services/product-cart/productcart.service';
import { ProductsService } from './../../core/services/product/products.service';
import { IProduct } from '../../core/services/product/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product?: IProduct;
  public mainImg?: string;
  public secondaryImg?: string[] = [];
  public sizes?: string[] = [];
  public quantity: number[] = [];
  public sizeSelected?: string;
  public quantSelected?: number;
  public quantForm?: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private productCartService: ProductCartService,
    private fb: FormBuilder
  ) {
    this.quantForm = this.fb.group({
      quantSelected: new FormControl(1, [
        Validators.min(1),
        Validators.max(10),
        Validators.required,
      ]),
    });
  }

  /**
   * Get the product id from the params listening the route
   * then get the product using the service productService calling the api
   * and set different variables to iterate in the html such as the images, the sizes and the quantity
   */
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          const productId = params['id'];
          return this.productsService.getProductById(productId);
        })
      )
      .subscribe((product) => {
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

    obj.quantSelected = this.quantForm?.value['quantSelected'];

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
