import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFeeComponent } from './entry-fee.component';

describe('EntryFeeComponent', () => {
  let component: EntryFeeComponent;
  let fixture: ComponentFixture<EntryFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
