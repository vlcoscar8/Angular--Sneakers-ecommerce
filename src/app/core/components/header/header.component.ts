import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public query?: string;
  public isDesktop?: boolean = false;
  public navClicked?: boolean = false;
  public showFilter?: boolean = false;
  public genre?: string;

  constructor(private router: Router) {}

  @HostListener('window:resize')
  onResize() {
    window.innerWidth > 500
      ? (this.isDesktop = true)
      : (this.isDesktop = false);
  }

  ngOnInit(): void {
    window.innerWidth > 500
      ? (this.isDesktop = true)
      : (this.isDesktop = false);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.query = e.url.split(';')[1];
      }
    });
  }

  public btnClick() {
    this.navClicked = !this.navClicked;
  }

  public setGenre(text?: string) {
    console.log(text);
    if (this.genre === text && this.showFilter) {
      this.showFilter = false;
    } else {
      this.genre = text;
      this.showFilter = true;
    }
  }

  public closeFilter() {
    this.showFilter = false;
  }
}
