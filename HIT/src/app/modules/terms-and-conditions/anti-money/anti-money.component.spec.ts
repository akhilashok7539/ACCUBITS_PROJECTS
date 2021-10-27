import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiMoneyComponent } from './anti-money.component';

describe('AntiMoneyComponent', () => {
  let component: AntiMoneyComponent;
  let fixture: ComponentFixture<AntiMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
