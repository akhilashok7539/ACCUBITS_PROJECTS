import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionPlayersPopComponent } from './competition-players-pop.component';

describe('CompetitionPlayersPopComponent', () => {
  let component: CompetitionPlayersPopComponent;
  let fixture: ComponentFixture<CompetitionPlayersPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionPlayersPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionPlayersPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
