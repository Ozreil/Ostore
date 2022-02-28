import { TestBed } from '@angular/core/testing';

import { MainOffersService } from './main-offers.service';

describe('MainOffersService', () => {
  let service: MainOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
