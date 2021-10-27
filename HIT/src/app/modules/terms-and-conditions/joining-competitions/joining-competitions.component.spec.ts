import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningCompetitionsComponent } from './joining-competitions.component';

describe('JoiningCompetitionsComponent', () => {
  let component: JoiningCompetitionsComponent;
  let fixture: ComponentFixture<JoiningCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoiningCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoiningCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
