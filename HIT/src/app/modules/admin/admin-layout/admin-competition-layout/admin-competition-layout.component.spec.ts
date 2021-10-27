import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompetitionLayoutComponent } from './admin-competition-layout.component';

describe('AdminCompetitionLayoutComponent', () => {
  let component: AdminCompetitionLayoutComponent;
  let fixture: ComponentFixture<AdminCompetitionLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompetitionLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompetitionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
