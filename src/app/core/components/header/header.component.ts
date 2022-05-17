import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public path?: string;
  public query?: string;
  public isDesktop?: boolean = false;
  public navClicked?: boolean = false;
  public showFilter?: boolean = false;
  public genre?: string;

  constructor(private router: Router) {}

  @HostListener('window:resize')

  /**
   * Check if the windowHeight is desktop or mobile with a breakpoint in 500px
   */
  onResize() {
    window.innerWidth > 500
      ? (this.isDesktop = true)
      : (this.isDesktop = false);
  }

  /**
   * First toggle the variable isDesktop to true or false depending on the windowdHeight
   * Second set the query and the path listening the router path
   */
  ngOnInit(): void {
    window.innerWidth > 500
      ? (this.isDesktop = true)
      : (this.isDesktop = false);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.query = e.url.split(';')[1];
        this.path = e.url.split(';')[0];
      }
    });
  }

  /**
   * Toogle the navClicked variable to use in the style of the nav button
   */
  public btnClick() {
    this.navClicked = !this.navClicked;
  }

  /**
   * This function toggle the filter below the header and set the genre to pass it to the query params later.
   * @param text The value of the link, it could be 'Woman' or 'Man'
   */
  public setGenre(text?: string) {
    if (this.genre === text && this.showFilter) {
      this.showFilter = false;
    } else {
      this.genre = text;
      this.showFilter = true;
    }
  }

  /**
   * Close the filter when the user click on them
   */
  public closeFilter() {
    this.showFilter = false;
  }
}
