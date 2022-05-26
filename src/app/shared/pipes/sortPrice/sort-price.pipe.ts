import { PaginationService } from './../../../core/services/pagination/pagination.service';
import { IProduct } from 'src/app/core/services/product/model/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice',
})
export class SortPricePipe implements PipeTransform {
  transform(value: IProduct[], criteria?: string): IProduct[] {
    if (criteria === 'caro') {
      return value.sort((a, b) => b.price - a.price);
    } else if (criteria === 'barato') {
      return value.sort((a, b) => a.price - b.price);
    }

    return value;
  }
}
