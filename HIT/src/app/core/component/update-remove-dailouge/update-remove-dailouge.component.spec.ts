import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRemoveDailougeComponent } from './update-remove-dailouge.component';

describe('UpdateRemoveDailougeComponent', () => {
  let component: UpdateRemoveDailougeComponent;
  let fixture: ComponentFixture<UpdateRemoveDailougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRemoveDailougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRemoveDailougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
