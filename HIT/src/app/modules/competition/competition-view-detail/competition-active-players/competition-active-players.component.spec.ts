import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionActivePlayersComponent } from './competition-active-players.component';

describe('CompetitionActivePlayersComponent', () => {
  let component: CompetitionActivePlayersComponent;
  let fixture: ComponentFixture<CompetitionActivePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionActivePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionActivePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
