import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCatelogueHistoryComponent } from './customers-catelogue-history.component';

describe('CustomersCatelogueHistoryComponent', () => {
  let component: CustomersCatelogueHistoryComponent;
  let fixture: ComponentFixture<CustomersCatelogueHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCatelogueHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCatelogueHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
