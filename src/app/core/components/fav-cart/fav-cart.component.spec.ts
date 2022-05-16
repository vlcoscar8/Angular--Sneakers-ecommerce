import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCartComponent } from './fav-cart.component';

describe('FavCartComponent', () => {
  let component: FavCartComponent;
  let fixture: ComponentFixture<FavCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
