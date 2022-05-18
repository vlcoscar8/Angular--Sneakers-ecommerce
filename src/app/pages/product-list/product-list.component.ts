import { ProductsService } from './../../core/services/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/services/product/model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products?: IProduct[];
  public brand?: string;
  public genre?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (e) => {
      this.genre = e['genre'];
      e['brand'] ? (this.brand = e['brand']) : (this.brand = '');
    });

    console.log(this.brand, this.genre);
    this.productsService
      .getProducts(this.genre, this.brand)
      .subscribe((products) => (this.products = products));
  }
}
