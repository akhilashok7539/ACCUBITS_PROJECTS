import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingPopupComponent } from './competition-betting-popup.component';

describe('CompetitionBettingPopupComponent', () => {
  let component: CompetitionBettingPopupComponent;
  let fixture: ComponentFixture<CompetitionBettingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
