import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionMatchPlayedCardComponent } from './competition-match-played-card.component';

describe('CompetitionMatchPlayedCardComponent', () => {
  let component: CompetitionMatchPlayedCardComponent;
  let fixture: ComponentFixture<CompetitionMatchPlayedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionMatchPlayedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionMatchPlayedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
