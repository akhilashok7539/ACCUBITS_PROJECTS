import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionMatchOverviewComponent } from './competition-match-overview.component';

describe('CompetitionMatchOverviewComponent', () => {
  let component: CompetitionMatchOverviewComponent;
  let fixture: ComponentFixture<CompetitionMatchOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionMatchOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionMatchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
