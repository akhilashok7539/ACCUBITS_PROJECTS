import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionMatchOverviewCardComponent } from './competition-match-overview-card.component';

describe('CompetitionMatchOverviewCardComponent', () => {
  let component: CompetitionMatchOverviewCardComponent;
  let fixture: ComponentFixture<CompetitionMatchOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionMatchOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionMatchOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
