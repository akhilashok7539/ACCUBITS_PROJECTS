import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationFooterComponent } from './table-pagination-footer.component';

describe('TablePaginationFooterComponent', () => {
  let component: TablePaginationFooterComponent;
  let fixture: ComponentFixture<TablePaginationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePaginationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
