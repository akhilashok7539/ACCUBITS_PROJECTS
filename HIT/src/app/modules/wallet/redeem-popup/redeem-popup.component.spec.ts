import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPopupComponent } from './redeem-popup.component';

describe('RedeemPopupComponent', () => {
  let component: RedeemPopupComponent;
  let fixture: ComponentFixture<RedeemPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
