import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCompetitionComponent } from './review-competition.component';

describe('ReviewCompetitionComponent', () => {
  let component: ReviewCompetitionComponent;
  let fixture: ComponentFixture<ReviewCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
