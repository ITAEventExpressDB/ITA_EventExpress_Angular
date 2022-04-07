import { TestBed } from '@angular/core/testing';

import { CategoriesFormService } from './categories-form.service';

describe('CategoriesFormService', () => {
  let service: CategoriesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
