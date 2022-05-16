import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-responsive-nav',
  templateUrl: './responsive-nav.component.html',
  styleUrls: ['./responsive-nav.component.scss'],
})
export class ResponsiveNavComponent implements OnInit {
  @Input() public navClicked?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
