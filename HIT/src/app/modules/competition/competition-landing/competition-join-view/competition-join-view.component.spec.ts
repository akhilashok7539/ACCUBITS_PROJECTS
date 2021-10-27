import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionJoinViewComponent } from './competition-join-view.component';

describe('CompetitionJoinViewComponent', () => {
  let component: CompetitionJoinViewComponent;
  let fixture: ComponentFixture<CompetitionJoinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionJoinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionJoinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
