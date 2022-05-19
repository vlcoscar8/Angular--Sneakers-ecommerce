import { ProductsService } from './../../core/services/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/services/product/model/product.model';
import { Component, OnInit } from '@angular/core';
import { switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products?: Observable<IProduct[]>;
  public brand?: string;
  public genre?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  /**
   * Get the query params from the route ("genre" & "brand")
   * then get the products list filtering by the querys usign the pipe with switchmap to concatenate asyncronus methods
   */
  ngOnInit(): void {
    this.products = this.activatedRoute.params.pipe(
      switchMap((e) => {
        this.genre = e['genre'];
        e['brand'] ? (this.brand = e['brand']) : (this.brand = '');

        return this.productsService.getProducts(this.genre, this.brand);
      })
    );
  }
}
