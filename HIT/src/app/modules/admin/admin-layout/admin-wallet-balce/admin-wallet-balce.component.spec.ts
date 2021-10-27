import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWalletBalceComponent } from './admin-wallet-balce.component';

describe('AdminWalletBalceComponent', () => {
  let component: AdminWalletBalceComponent;
  let fixture: ComponentFixture<AdminWalletBalceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWalletBalceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWalletBalceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
