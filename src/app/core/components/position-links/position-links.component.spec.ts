import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionLinksComponent } from './position-links.component';

describe('PositionLinksComponent', () => {
  let component: PositionLinksComponent;
  let fixture: ComponentFixture<PositionLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
