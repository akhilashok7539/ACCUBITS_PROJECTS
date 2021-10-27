import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPopUpConfirmationComponent } from './redeem-pop-up-confirmation.component';

describe('RedeemPopUpConfirmationComponent', () => {
  let component: RedeemPopUpConfirmationComponent;
  let fixture: ComponentFixture<RedeemPopUpConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemPopUpConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemPopUpConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
