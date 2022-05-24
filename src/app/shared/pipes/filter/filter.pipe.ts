import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/core/services/product/model/product.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: IProduct[], criteria: string): IProduct[] {
    return value.filter(
      (product) =>
        product.title.toLowerCase().includes(criteria.toLowerCase()) ||
        product.brand === criteria
    );
  }
}
