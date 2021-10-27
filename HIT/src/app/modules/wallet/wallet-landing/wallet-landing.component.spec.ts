import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletLandingComponent } from './wallet-landing.component';

describe('WalletLandingComponent', () => {
  let component: WalletLandingComponent;
  let fixture: ComponentFixture<WalletLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
