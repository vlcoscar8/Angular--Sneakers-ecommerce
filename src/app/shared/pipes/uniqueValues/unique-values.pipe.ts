import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueValues',
})
export class UniqueValuesPipe implements PipeTransform {
  transform(array: string[]): string[] {
    return [...new Set(array)];
  }
}
