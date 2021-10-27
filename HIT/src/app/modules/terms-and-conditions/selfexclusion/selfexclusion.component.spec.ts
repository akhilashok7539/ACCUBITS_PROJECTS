import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfexclusionComponent } from './selfexclusion.component';

describe('SelfexclusionComponent', () => {
  let component: SelfexclusionComponent;
  let fixture: ComponentFixture<SelfexclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfexclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfexclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
