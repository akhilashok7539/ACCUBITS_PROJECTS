import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSystemSettingsComponent } from './view-system-settings.component';

describe('ViewSystemSettingsComponent', () => {
  let component: ViewSystemSettingsComponent;
  let fixture: ComponentFixture<ViewSystemSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSystemSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSystemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
