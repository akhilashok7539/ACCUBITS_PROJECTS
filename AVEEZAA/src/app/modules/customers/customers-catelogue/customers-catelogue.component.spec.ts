import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCatelogueComponent } from './customers-catelogue.component';

describe('CustomersCatelogueComponent', () => {
  let component: CustomersCatelogueComponent;
  let fixture: ComponentFixture<CustomersCatelogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCatelogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCatelogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
