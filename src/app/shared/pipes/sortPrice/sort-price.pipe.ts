import { IProduct } from 'src/app/core/services/product/model/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice',
})
export class SortPricePipe implements PipeTransform {
  transform(value: IProduct[], criteria?: boolean): IProduct[] {
    if (criteria) {
      return value.sort((a, b) => b.price - a.price);
    } else {
      return value.sort((a, b) => a.price - b.price);
    }
  }
}
