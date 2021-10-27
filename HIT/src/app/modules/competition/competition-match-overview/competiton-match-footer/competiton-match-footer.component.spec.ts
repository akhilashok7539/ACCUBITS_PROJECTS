import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitonMatchFooterComponent } from './competiton-match-footer.component';

describe('CompetitonMatchFooterComponent', () => {
  let component: CompetitonMatchFooterComponent;
  let fixture: ComponentFixture<CompetitonMatchFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitonMatchFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitonMatchFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
