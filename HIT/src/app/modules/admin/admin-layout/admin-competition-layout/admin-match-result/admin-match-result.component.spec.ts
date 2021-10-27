import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatchResultComponent } from './admin-match-result.component';

describe('AdminMatchResultComponent', () => {
  let component: AdminMatchResultComponent;
  let fixture: ComponentFixture<AdminMatchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMatchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
