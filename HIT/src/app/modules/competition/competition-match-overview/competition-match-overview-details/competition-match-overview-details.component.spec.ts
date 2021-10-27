import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionMatchOverviewDetailsComponent } from './competition-match-overview-details.component';

describe('CompetitionMatchOverviewDetailsComponent', () => {
  let component: CompetitionMatchOverviewDetailsComponent;
  let fixture: ComponentFixture<CompetitionMatchOverviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionMatchOverviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionMatchOverviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
