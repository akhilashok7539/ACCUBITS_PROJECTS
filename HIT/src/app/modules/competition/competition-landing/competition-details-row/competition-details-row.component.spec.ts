import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDetailsRowComponent } from './competition-details-row.component';

describe('CompetitionDetailsRowComponent', () => {
  let component: CompetitionDetailsRowComponent;
  let fixture: ComponentFixture<CompetitionDetailsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionDetailsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionDetailsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
