import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionLandingMyCompetitionComponent } from './competition-landing-my-competition.component';

describe('CompetitionLandingMyCompetitionComponent', () => {
  let component: CompetitionLandingMyCompetitionComponent;
  let fixture: ComponentFixture<CompetitionLandingMyCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionLandingMyCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionLandingMyCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
