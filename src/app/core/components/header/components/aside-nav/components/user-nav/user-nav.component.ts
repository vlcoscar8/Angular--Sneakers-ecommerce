import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
})
export class UserNavComponent implements OnInit {
  public buttonClicked: string = '';
  constructor() {}

  ngOnInit(): void {
    this.buttonClicked = '';
  }

  public openForm(value: any) {
    this.buttonClicked = value.innerText;
  }

  public back() {
    this.buttonClicked = '';
  }
}
