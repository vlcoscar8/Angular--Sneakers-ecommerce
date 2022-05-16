import { ActivatedRoute } from '@angular/router';
import { products } from './../../shared/components/product/config/product.config';
import { IProduct } from './../../shared/components/product/model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products?: IProduct[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (e) => {
      const genre = e['genre'];
      const brand = e['brand'];
      const response = await fetch(
        `https://sneakersecommerceapi.vercel.app//products?genre=${genre}&brand=${brand}`
      );
      this.products = await response.json();
    });
  }
}
