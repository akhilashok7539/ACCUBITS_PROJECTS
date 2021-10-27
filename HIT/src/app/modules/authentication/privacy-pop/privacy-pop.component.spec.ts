import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPopComponent } from './privacy-pop.component';

describe('PrivacyPopComponent', () => {
  let component: PrivacyPopComponent;
  let fixture: ComponentFixture<PrivacyPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
