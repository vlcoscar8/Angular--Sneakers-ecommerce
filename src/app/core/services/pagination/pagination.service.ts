import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  public maxPage$: Subject<number> = new Subject();

  public setMaxPage(page: number) {
    this.maxPage$.next(page);
  }
}
