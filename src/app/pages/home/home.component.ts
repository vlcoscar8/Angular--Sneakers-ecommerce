import { IProduct } from './../../core/services/product/model/product.model';
import { ProductsService } from './../../core/services/product/products.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public lastProducts?: IProduct[];
  public mostValuated?: IProduct[];

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getShopHome().subscribe((info) => {
      this.lastProducts = info[0].lastBuys;
      this.mostValuated = info[0].mostValuated;
    });
  }
}
