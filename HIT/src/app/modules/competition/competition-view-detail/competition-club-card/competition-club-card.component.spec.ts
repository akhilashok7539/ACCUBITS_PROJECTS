import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionClubCardComponent } from './competition-club-card.component';

describe('CompetitionClubCardComponent', () => {
  let component: CompetitionClubCardComponent;
  let fixture: ComponentFixture<CompetitionClubCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionClubCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionClubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
