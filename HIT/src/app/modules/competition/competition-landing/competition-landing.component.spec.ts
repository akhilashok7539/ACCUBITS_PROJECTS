import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionLandingComponent } from './competition-landing.component';

describe('CompetitionLandingComponent', () => {
  let component: CompetitionLandingComponent;
  let fixture: ComponentFixture<CompetitionLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
