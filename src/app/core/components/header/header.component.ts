import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
  }

  public btnClick() {
    this.navClicked = !this.navClicked;
  }

  public setGenre(text: string) {
    if (!this.showFilter) {
      this.showFilter = true;
    } else {
      !!this.showFilter;
    }
    this.genre = text;
  }

  public closeFilter() {
    this.showFilter = !this.showFilter;
  }
}
