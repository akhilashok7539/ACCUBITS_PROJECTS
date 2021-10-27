import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionLandingLayoutComponent } from './competition-landing-layout.component';

describe('CompetitionLandingLayoutComponent', () => {
  let component: CompetitionLandingLayoutComponent;
  let fixture: ComponentFixture<CompetitionLandingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionLandingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionLandingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
