import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProductListViewComponent } from './customer-product-list-view.component';

describe('CustomerProductListViewComponent', () => {
  let component: CustomerProductListViewComponent;
  let fixture: ComponentFixture<CustomerProductListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProductListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProductListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
