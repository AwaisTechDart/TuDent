import { TestBed, inject } from '@angular/core/testing';

import { SignupGeneralService } from './signup-general.service';

describe('SignupGeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupGeneralService]
    });
  });

  it('should be created', inject([SignupGeneralService], (service: SignupGeneralService) => {
    expect(service).toBeTruthy();
  }));
});
