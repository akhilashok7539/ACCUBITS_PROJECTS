import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionResultComponent } from './competition-result.component';

describe('CompetitionResultComponent', () => {
  let component: CompetitionResultComponent;
  let fixture: ComponentFixture<CompetitionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
