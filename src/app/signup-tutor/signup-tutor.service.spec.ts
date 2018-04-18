import { TestBed, inject } from '@angular/core/testing';

import { SignupTutorService } from './signup-tutor.service';

describe('SignupTutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupTutorService]
    });
  });

  it('should be created', inject([SignupTutorService], (service: SignupTutorService) => {
    expect(service).toBeTruthy();
  }));
});
