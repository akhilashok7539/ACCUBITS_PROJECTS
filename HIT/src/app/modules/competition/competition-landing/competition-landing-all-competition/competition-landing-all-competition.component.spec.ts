import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionLandingAllCompetitionComponent } from './competition-landing-all-competition.component';

describe('CompetitionLandingAllCompetitionComponent', () => {
  let component: CompetitionLandingAllCompetitionComponent;
  let fixture: ComponentFixture<CompetitionLandingAllCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionLandingAllCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionLandingAllCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
