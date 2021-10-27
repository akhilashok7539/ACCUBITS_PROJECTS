import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfUsePopComponent } from './terms-of-use-pop.component';

describe('TermsOfUsePopComponent', () => {
  let component: TermsOfUsePopComponent;
  let fixture: ComponentFixture<TermsOfUsePopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfUsePopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfUsePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
