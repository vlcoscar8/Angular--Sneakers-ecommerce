import { TestBed } from '@angular/core/testing';

import { FavcartService } from './favcart.service';

describe('FavcartService', () => {
  let service: FavcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
