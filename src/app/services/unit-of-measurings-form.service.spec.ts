import { TestBed } from '@angular/core/testing';

import { UnitOfMeasuringsFormService } from './unit-of-measurings-form.service';

describe('UnitOfMeasuringsFormService', () => {
  let service: UnitOfMeasuringsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitOfMeasuringsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
