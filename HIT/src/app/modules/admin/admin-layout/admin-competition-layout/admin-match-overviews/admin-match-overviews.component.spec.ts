import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatchOverviewsComponent } from './admin-match-overviews.component';

describe('AdminMatchOverviewsComponent', () => {
  let component: AdminMatchOverviewsComponent;
  let fixture: ComponentFixture<AdminMatchOverviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMatchOverviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMatchOverviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
