import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewQuestionsApptitudePage } from './view-questions-apptitude.page';

describe('ViewQuestionsApptitudePage', () => {
  let component: ViewQuestionsApptitudePage;
  let fixture: ComponentFixture<ViewQuestionsApptitudePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQuestionsApptitudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewQuestionsApptitudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
