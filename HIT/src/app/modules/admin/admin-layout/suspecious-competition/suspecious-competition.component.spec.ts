import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspeciousCompetitionComponent } from './suspecious-competition.component';

describe('SuspeciousCompetitionComponent', () => {
  let component: SuspeciousCompetitionComponent;
  let fixture: ComponentFixture<SuspeciousCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspeciousCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspeciousCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
