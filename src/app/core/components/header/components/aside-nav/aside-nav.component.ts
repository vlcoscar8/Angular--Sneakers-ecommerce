import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss'],
})
export class AsideNavComponent implements OnInit {
  @Input() public userNavOpened: boolean = false;
  @Input() public cartOpened: boolean = false;
  @Input() public isDesktop?: boolean;
  @Input() public cartProductsLenght?: number;
  @Input() public cartProducts?: Object[];

  constructor() {}

  ngOnInit(): void {}
}
