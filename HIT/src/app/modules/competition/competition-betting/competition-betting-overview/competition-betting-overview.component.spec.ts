import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingOverviewComponent } from './competition-betting-overview.component';

describe('CompetitionBettingOverviewComponent', () => {
  let component: CompetitionBettingOverviewComponent;
  let fixture: ComponentFixture<CompetitionBettingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
