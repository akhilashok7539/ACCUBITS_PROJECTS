import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseChampionshipComponent } from './choose-championship.component';

describe('ChooseChampionshipComponent', () => {
  let component: ChooseChampionshipComponent;
  let fixture: ComponentFixture<ChooseChampionshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseChampionshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
