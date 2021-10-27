import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionGamesComponent } from './competition-games.component';

describe('CompetitionGamesComponent', () => {
  let component: CompetitionGamesComponent;
  let fixture: ComponentFixture<CompetitionGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
