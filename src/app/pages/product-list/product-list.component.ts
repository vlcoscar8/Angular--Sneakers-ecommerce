import { products } from './../../shared/components/product/config/product.config';
import { IProduct } from './../../shared/components/product/model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = products as IProduct[];

  constructor() {}

  ngOnInit(): void {}
}
