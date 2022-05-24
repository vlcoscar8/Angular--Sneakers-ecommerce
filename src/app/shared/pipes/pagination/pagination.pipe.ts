import { IProduct } from 'src/app/core/services/product/model/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  pure: false,
})
export class PaginationPipe implements PipeTransform {
  transform(value: IProduct[], currentPage: number): IProduct[] {
    const firstIndex = (currentPage - 1) * 6;
    const lastIndex = currentPage * 6;
    return value.slice(firstIndex, lastIndex);
  }
}
