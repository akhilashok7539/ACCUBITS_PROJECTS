import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitonMatchLineupComponent } from './competiton-match-lineup.component';

describe('CompetitonMatchLineupComponent', () => {
  let component: CompetitonMatchLineupComponent;
  let fixture: ComponentFixture<CompetitonMatchLineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitonMatchLineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitonMatchLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
