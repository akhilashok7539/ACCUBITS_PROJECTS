import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmissionOfficerlistPage } from './addmission-officerlist.page';

describe('AddmissionOfficerlistPage', () => {
  let component: AddmissionOfficerlistPage;
  let fixture: ComponentFixture<AddmissionOfficerlistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmissionOfficerlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmissionOfficerlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
