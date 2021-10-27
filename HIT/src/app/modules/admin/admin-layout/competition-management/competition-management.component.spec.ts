import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionManagementComponent } from './competition-management.component';

describe('CompetitionManagementComponent', () => {
  let component: CompetitionManagementComponent;
  let fixture: ComponentFixture<CompetitionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
