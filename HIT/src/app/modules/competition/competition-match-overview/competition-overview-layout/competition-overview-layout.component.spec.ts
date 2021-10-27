import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionOverviewLayoutComponent } from './competition-overview-layout.component';

describe('CompetitionOverviewLayoutComponent', () => {
  let component: CompetitionOverviewLayoutComponent;
  let fixture: ComponentFixture<CompetitionOverviewLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionOverviewLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionOverviewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
