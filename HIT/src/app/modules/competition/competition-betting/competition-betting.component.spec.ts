import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingComponent } from './competition-betting.component';

describe('CompetitionBettingComponent', () => {
  let component: CompetitionBettingComponent;
  let fixture: ComponentFixture<CompetitionBettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
