import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingResultViewComponent } from './competition-betting-result-view.component';

describe('CompetitionBettingResultViewComponent', () => {
  let component: CompetitionBettingResultViewComponent;
  let fixture: ComponentFixture<CompetitionBettingResultViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingResultViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
