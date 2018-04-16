import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGeneralComponent } from './signup-general.component';

describe('SignupGeneralComponent', () => {
  let component: SignupGeneralComponent;
  let fixture: ComponentFixture<SignupGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
