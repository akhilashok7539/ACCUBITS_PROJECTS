import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserActivityComponent } from './admin-user-activity.component';

describe('AdminUserActivityComponent', () => {
  let component: AdminUserActivityComponent;
  let fixture: ComponentFixture<AdminUserActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
