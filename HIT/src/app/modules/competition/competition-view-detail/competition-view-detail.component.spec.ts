import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionViewDetailComponent } from './competition-view-detail.component';

describe('CompetitionViewDetailComponent', () => {
  let component: CompetitionViewDetailComponent;
  let fixture: ComponentFixture<CompetitionViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
