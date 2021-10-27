import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousManagementComponent } from './suspicious-management.component';

describe('SuspiciousManagementComponent', () => {
  let component: SuspiciousManagementComponent;
  let fixture: ComponentFixture<SuspiciousManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspiciousManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
