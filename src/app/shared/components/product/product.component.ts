import { IProduct } from './model/product.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() public product?: IProduct;
  constructor() {}

  ngOnInit(): void {}

  public addFav(obj: IProduct) {
    console.log(obj);
  }

  ngOnDestroy(): void {}
}
