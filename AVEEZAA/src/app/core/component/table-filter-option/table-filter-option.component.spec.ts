import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterOptionComponent } from './table-filter-option.component';

describe('TableFilterOptionComponent', () => {
  let component: TableFilterOptionComponent;
  let fixture: ComponentFixture<TableFilterOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFilterOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
