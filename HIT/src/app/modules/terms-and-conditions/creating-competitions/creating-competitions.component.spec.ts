import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingCompetitionsComponent } from './creating-competitions.component';

describe('CreatingCompetitionsComponent', () => {
  let component: CreatingCompetitionsComponent;
  let fixture: ComponentFixture<CreatingCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
