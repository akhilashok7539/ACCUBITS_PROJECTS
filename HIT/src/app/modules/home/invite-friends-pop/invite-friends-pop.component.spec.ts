import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFriendsPopComponent } from './invite-friends-pop.component';

describe('InviteFriendsPopComponent', () => {
  let component: InviteFriendsPopComponent;
  let fixture: ComponentFixture<InviteFriendsPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteFriendsPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFriendsPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
