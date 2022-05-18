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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      const productId = params['id'];

      const response = await fetch(
        `https://sneakersecommerceapi.vercel.app/product/${productId}`
      );

      this.product = await response.json();
    });
  }
}
