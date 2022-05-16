import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.scss'],
})
export class NavBtnComponent implements OnInit {
  @Input() public navClicked?: boolean;
  @Input() public isDesktop?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
