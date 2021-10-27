import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingClubViewComponent } from './competition-betting-club-view.component';

describe('CompetitionBettingClubViewComponent', () => {
  let component: CompetitionBettingClubViewComponent;
  let fixture: ComponentFixture<CompetitionBettingClubViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingClubViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingClubViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
