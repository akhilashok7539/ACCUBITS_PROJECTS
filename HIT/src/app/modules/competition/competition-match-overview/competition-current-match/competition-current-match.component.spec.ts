import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionCurrentMatchComponent } from './competition-current-match.component';

describe('CompetitionCurrentMatchComponent', () => {
  let component: CompetitionCurrentMatchComponent;
  let fixture: ComponentFixture<CompetitionCurrentMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionCurrentMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionCurrentMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
