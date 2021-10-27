import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPasswordStrengthComponent } from './admin-password-strength.component';

describe('AdminPasswordStrengthComponent', () => {
  let component: AdminPasswordStrengthComponent;
  let fixture: ComponentFixture<AdminPasswordStrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPasswordStrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
