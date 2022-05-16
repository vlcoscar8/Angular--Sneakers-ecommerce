import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.scss'],
})
export class HeaderFilterComponent implements OnInit {
  @Input() public genre?: string;

  constructor() {}

  ngOnInit(): void {}
}
