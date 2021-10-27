import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsClubsViewComponent } from './teams-clubs-view.component';

describe('TeamsClubsViewComponent', () => {
  let component: TeamsClubsViewComponent;
  let fixture: ComponentFixture<TeamsClubsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsClubsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsClubsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
