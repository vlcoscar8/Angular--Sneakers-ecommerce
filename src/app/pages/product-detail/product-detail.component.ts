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

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  /**
   * Get the product id from the params listening the route
   * then get the product using the service productService calling the api
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.productId = params['id'];
    });

    this.productsService
      .getProductById(this.productId)
      .subscribe((product) => (this.product = product));
  }
}
