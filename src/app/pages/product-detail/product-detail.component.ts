import { products } from './../../shared/components/product/config/product.config';
import { IProduct } from './../../shared/components/product/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public products: IProduct[] = products as IProduct[];
  public product?: IProduct;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      this.product = this.products.find(
        (pro) => pro.id === parseInt(productId)
      );
    });
  }
}
