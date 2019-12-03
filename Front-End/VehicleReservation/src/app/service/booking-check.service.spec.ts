import { TestBed } from '@angular/core/testing';

import { BookingCheckService } from './booking-check.service';

describe('BookingCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingCheckService = TestBed.get(BookingCheckService);
    expect(service).toBeTruthy();
  });
});
