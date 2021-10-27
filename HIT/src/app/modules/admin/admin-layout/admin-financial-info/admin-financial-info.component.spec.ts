import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFinancialInfoComponent } from './admin-financial-info.component';

describe('AdminFinancialInfoComponent', () => {
  let component: AdminFinancialInfoComponent;
  let fixture: ComponentFixture<AdminFinancialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFinancialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFinancialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
