import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionLandingHistoryComponent } from './competition-landing-history.component';

describe('CompetitionLandingHistoryComponent', () => {
  let component: CompetitionLandingHistoryComponent;
  let fixture: ComponentFixture<CompetitionLandingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionLandingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionLandingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
