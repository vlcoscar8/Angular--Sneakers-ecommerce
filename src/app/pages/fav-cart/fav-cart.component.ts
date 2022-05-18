import { FavcartService } from './../../core/services/favcart.service';
import { IProduct } from './../../shared/components/product/model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-cart',
  templateUrl: './fav-cart.component.html',
  styleUrls: ['./fav-cart.component.scss'],
})
export class FavCartComponent implements OnInit {
  public favProducts?: IProduct[];

  constructor(private favcartService: FavcartService) {}

  ngOnInit(): void {
    this.favProducts = this.favcartService.getFavProducts();
  }
}
