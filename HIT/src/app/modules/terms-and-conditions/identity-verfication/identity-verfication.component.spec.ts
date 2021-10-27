import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityVerficationComponent } from './identity-verfication.component';

describe('IdentityVerficationComponent', () => {
  let component: IdentityVerficationComponent;
  let fixture: ComponentFixture<IdentityVerficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityVerficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityVerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
