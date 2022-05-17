import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-nav',
  templateUrl: './responsive-nav.component.html',
  styleUrls: ['./responsive-nav.component.scss'],
})
export class ResponsiveNavComponent implements OnInit {
  @Input() public navClicked?: boolean;
  @Output() public genre: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Get the value emiting the genre to the parentComponent - header
   * @param text It could be 'Man' or 'Woman'
   */
  public setGenre(text: string) {
    this.genre.emit(text);
  }
}
