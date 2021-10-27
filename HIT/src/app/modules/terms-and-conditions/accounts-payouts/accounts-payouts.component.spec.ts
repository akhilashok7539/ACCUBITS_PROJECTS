import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPayoutsComponent } from './accounts-payouts.component';

describe('AccountsPayoutsComponent', () => {
  let component: AccountsPayoutsComponent;
  let fixture: ComponentFixture<AccountsPayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsPayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsPayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
