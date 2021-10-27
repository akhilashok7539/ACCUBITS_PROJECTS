import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionCardsComponent } from './competition-cards.component';

describe('CompetitionCardsComponent', () => {
  let component: CompetitionCardsComponent;
  let fixture: ComponentFixture<CompetitionCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
