import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingPopupComponent } from './betting-popup.component';

describe('BettingPopupComponent', () => {
  let component: BettingPopupComponent;
  let fixture: ComponentFixture<BettingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
