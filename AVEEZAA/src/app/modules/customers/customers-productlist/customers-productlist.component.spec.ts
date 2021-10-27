import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersProductlistComponent } from './customers-productlist.component';

describe('CustomersProductlistComponent', () => {
  let component: CustomersProductlistComponent;
  let fixture: ComponentFixture<CustomersProductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersProductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
