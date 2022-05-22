import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcPrice',
})
export class CalcPricePipe implements PipeTransform {
  transform(value: number, criteria: Object[]): number {
    let price = value;
    criteria.forEach(
      (product: any) => (price += product.product.price * product.units)
    );

    console.log(price);
    return price;
  }
}
