import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.scss'],
})
export class NavBtnComponent {
  @Input() public navClicked?: boolean;

  constructor() {}
}
