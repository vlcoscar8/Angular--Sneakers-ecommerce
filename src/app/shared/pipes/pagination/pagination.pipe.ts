import { PaginationService } from './../../../core/services/pagination/pagination.service';
import { IProduct } from 'src/app/core/services/product/model/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  pure: false,
})
export class PaginationPipe implements PipeTransform {
  constructor(private pagination: PaginationService) {}
  transform(
    value: IProduct[],
    currentPage: number,
    numProducts: number
  ): IProduct[] {
    this.pagination.setMaxPage(Math.ceil(value.length / numProducts));
    const firstIndex = (currentPage - 1) * numProducts;
    const lastIndex = currentPage * numProducts;
    return value.slice(firstIndex, lastIndex);
  }
}
