import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomFotterComponent } from './buttom-fotter.component';

describe('ButtomFotterComponent', () => {
  let component: ButtomFotterComponent;
  let fixture: ComponentFixture<ButtomFotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtomFotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
