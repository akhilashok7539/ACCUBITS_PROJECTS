import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionLayoutComponent } from './competition-layout.component';

describe('CompetitionLayoutComponent', () => {
  let component: CompetitionLayoutComponent;
  let fixture: ComponentFixture<CompetitionLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
