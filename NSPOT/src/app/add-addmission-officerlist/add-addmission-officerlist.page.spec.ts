import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAddmissionOfficerlistPage } from './add-addmission-officerlist.page';

describe('AddAddmissionOfficerlistPage', () => {
  let component: AddAddmissionOfficerlistPage;
  let fixture: ComponentFixture<AddAddmissionOfficerlistPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddmissionOfficerlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddmissionOfficerlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
