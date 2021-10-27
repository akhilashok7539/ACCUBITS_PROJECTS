import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionFooterComponent } from './competition-footer.component';

describe('CompetitionFooterComponent', () => {
  let component: CompetitionFooterComponent;
  let fixture: ComponentFixture<CompetitionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
