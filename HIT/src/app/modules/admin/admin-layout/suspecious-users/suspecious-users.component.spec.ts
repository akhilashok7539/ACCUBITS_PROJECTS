import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspeciousUsersComponent } from './suspecious-users.component';

describe('SuspeciousUsersComponent', () => {
  let component: SuspeciousUsersComponent;
  let fixture: ComponentFixture<SuspeciousUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspeciousUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspeciousUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
