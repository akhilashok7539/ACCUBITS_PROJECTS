import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblePlayerComponent } from './responsible-player.component';

describe('ResponsiblePlayerComponent', () => {
  let component: ResponsiblePlayerComponent;
  let fixture: ComponentFixture<ResponsiblePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiblePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiblePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
