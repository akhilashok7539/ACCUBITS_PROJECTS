import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousTransactionsComponent } from './suspicious-transactions.component';

describe('SuspiciousTransactionsComponent', () => {
  let component: SuspiciousTransactionsComponent;
  let fixture: ComponentFixture<SuspiciousTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspiciousTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
