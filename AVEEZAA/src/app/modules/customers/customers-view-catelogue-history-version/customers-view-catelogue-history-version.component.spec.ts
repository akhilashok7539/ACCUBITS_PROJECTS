import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersViewCatelogueHistoryVersionComponent } from './customers-view-catelogue-history-version.component';

describe('CustomersViewCatelogueHistoryVersionComponent', () => {
  let component: CustomersViewCatelogueHistoryVersionComponent;
  let fixture: ComponentFixture<CustomersViewCatelogueHistoryVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersViewCatelogueHistoryVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersViewCatelogueHistoryVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
