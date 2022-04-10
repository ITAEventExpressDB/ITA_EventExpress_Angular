import { TestBed } from '@angular/core/testing';

import { ContactAdminFormService } from './contact-admin-form.service';

describe('ContactAdminFormService', () => {
  let service: ContactAdminFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactAdminFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
