import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public path: string = '/';
  public isDesktop?: boolean = false;
  public navClicked?: boolean = false;

  constructor(private router: Router) {}

  @HostListener('window:resize')
  onResize() {
    window.innerWidth > 500
      ? (this.isDesktop = true)
      : (this.isDesktop = false);
  }

  ngOnInit(): void {}

  public onClick() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.path = e.url.toString();
      }
    });
  }

  public btnClick() {
    this.navClicked = !this.navClicked;
  }
}
