import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLinkProductComponent } from './create-link-product.component';

describe('CreateLinkProductComponent', () => {
  let component: CreateLinkProductComponent;
  let fixture: ComponentFixture<CreateLinkProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLinkProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLinkProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
