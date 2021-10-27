import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsClubsComponent } from './teams-clubs.component';

describe('TeamsClubsComponent', () => {
  let component: TeamsClubsComponent;
  let fixture: ComponentFixture<TeamsClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsClubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
