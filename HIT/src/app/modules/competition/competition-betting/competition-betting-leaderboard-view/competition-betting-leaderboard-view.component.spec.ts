import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingLeaderboardViewComponent } from './competition-betting-leaderboard-view.component';

describe('CompetitionBettingLeaderboardViewComponent', () => {
  let component: CompetitionBettingLeaderboardViewComponent;
  let fixture: ComponentFixture<CompetitionBettingLeaderboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingLeaderboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingLeaderboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
