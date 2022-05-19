import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/services/product/model/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  @Input() public product?: IProduct;
  constructor() {}

  ngOnInit(): void {}
}
