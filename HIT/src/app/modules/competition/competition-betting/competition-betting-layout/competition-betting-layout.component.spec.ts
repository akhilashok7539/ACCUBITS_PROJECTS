import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBettingLayoutComponent } from './competition-betting-layout.component';

describe('CompetitionBettingLayoutComponent', () => {
  let component: CompetitionBettingLayoutComponent;
  let fixture: ComponentFixture<CompetitionBettingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBettingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBettingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
