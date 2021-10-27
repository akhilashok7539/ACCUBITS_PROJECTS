import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFundReportComponent } from './admin-fund-report.component';

describe('AdminFundReportComponent', () => {
  let component: AdminFundReportComponent;
  let fixture: ComponentFixture<AdminFundReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFundReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFundReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
