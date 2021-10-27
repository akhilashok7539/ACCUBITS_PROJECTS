import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionClubViewComponent } from './competition-club-view.component';

describe('CompetitionClubViewComponent', () => {
  let component: CompetitionClubViewComponent;
  let fixture: ComponentFixture<CompetitionClubViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionClubViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionClubViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
