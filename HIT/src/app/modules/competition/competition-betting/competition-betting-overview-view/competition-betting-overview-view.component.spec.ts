import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingOverviewViewComponent } from './competition-betting-overview-view.component';

describe('CompetitionBettingOverviewViewComponent', () => {
  let component: CompetitionBettingOverviewViewComponent;
  let fixture: ComponentFixture<CompetitionBettingOverviewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingOverviewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingOverviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
