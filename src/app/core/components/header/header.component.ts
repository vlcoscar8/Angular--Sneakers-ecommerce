import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public path: string = '/';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onClick = () => {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.path = e.url.toString();
      }
    });
  };
}
