import { ProductsService } from './../../core/services/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../core/services/product/model/product.model';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products?: IProduct[];
  public brand?: string;
  public genre?: string;
  public filterValue: string = '';
  public sortPriceValue?: boolean;
  public brands: string[] = [];
  public currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  /**
   * Get the query params from the route ("genre" & "brand")
   * then get the products list filtering by the querys usign the pipe with switchmap to concatenate asyncronus methods
   */
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          this.genre = params['genre'];
          params['brand'] ? (this.brand = params['brand']) : (this.brand = '');

          return this.productsService.getProducts(this.genre, this.brand);
        })
      )
      .subscribe((products) => {
        this.products = products;
        this.brands = this.products.map((product) => product.brand);
      });
  }

  public sortHighPrice() {
    this.sortPriceValue = true;
  }

  public sortLowerPrice() {
    this.sortPriceValue = false;
  }

  public filterBrand(brand: string) {
    this.filterValue = brand;
  }

  public previousPage() {
    this.currentPage -= 1;
  }

  public nextPage() {
    this.currentPage += 1;
  }
}
