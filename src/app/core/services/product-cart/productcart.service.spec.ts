import { TestBed } from '@angular/core/testing';

import { ProductCartService } from './productcart.service';

describe('ProductCartService', () => {
  let service: ProductCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
