import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMatchLeaderboardComponent } from './admin-match-leaderboard.component';

describe('AdminMatchLeaderboardComponent', () => {
  let component: AdminMatchLeaderboardComponent;
  let fixture: ComponentFixture<AdminMatchLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMatchLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMatchLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
