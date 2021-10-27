import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchsListingComponent } from './branchs-listing.component';

describe('BranchsListingComponent', () => {
  let component: BranchsListingComponent;
  let fixture: ComponentFixture<BranchsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
