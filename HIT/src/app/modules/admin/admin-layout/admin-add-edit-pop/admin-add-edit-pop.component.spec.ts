import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddEditPopComponent } from './admin-add-edit-pop.component';

describe('AdminAddEditPopComponent', () => {
  let component: AdminAddEditPopComponent;
  let fixture: ComponentFixture<AdminAddEditPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddEditPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddEditPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
