import { ProductCartService } from './../../../core/services/product-cart/productcart.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/core/services/product/model/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  @Input() public product?: any;
  @Output() public clickRemove: EventEmitter<boolean> = new EventEmitter();

  constructor(private productCartService: ProductCartService) {}

  ngOnInit(): void {}

  public removeProduct(product: Object) {
    this.productCartService.removeCartProduct(product);
    this.clickRemove.emit();
  }
}
