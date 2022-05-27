import { Component } from '@angular/core';
import { Input } from '@angular/core';

const brands = ['Nike', 'Adidas', 'Reebok', 'Puma'];

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss'],
})
export class HeaderFilterComponent {
  @Input() public genre?: string;
  public brands: string[] = brands;

  constructor() {}
}
