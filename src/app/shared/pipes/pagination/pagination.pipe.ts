import { IProduct } from 'src/app/core/services/product/model/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(value: IProduct[], criteria: number): IProduct[] {
    const firstIndex = (criteria - 1) * 6;
    const lastIndex = criteria * 6;
    return value.slice(firstIndex, lastIndex);
  }
}
