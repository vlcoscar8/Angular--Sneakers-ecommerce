import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-links',
  templateUrl: './position-links.component.html',
  styleUrls: ['./position-links.component.scss'],
})
export class PositionLinksComponent implements OnInit {
  public path?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url = e.url.split('/');
        this.path = url[1].toString();
      }
    });
  }
}
