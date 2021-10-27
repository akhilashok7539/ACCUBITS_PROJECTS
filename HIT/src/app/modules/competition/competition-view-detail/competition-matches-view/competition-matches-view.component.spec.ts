import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionMatchesViewComponent } from './competition-matches-view.component';

describe('CompetitionMatchesViewComponent', () => {
  let component: CompetitionMatchesViewComponent;
  let fixture: ComponentFixture<CompetitionMatchesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionMatchesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionMatchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
