import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemConfirmPopupComponent } from './redeem-confirm-popup.component';

describe('RedeemConfirmPopupComponent', () => {
  let component: RedeemConfirmPopupComponent;
  let fixture: ComponentFixture<RedeemConfirmPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemConfirmPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
