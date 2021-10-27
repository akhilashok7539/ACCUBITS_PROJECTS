import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJoinCompetitionComponent } from './admin-join-competition.component';

describe('AdminJoinCompetitionComponent', () => {
  let component: AdminJoinCompetitionComponent;
  let fixture: ComponentFixture<AdminJoinCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJoinCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJoinCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
