import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductsListComponent } from './create-products-list.component';

describe('CreateProductsListComponent', () => {
  let component: CreateProductsListComponent;
  let fixture: ComponentFixture<CreateProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
