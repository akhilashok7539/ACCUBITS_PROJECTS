import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';

@Component({
  selector: 'app-invite-friends-pop',
  templateUrl: './invite-friends-pop.component.html',
  styleUrls: ['./invite-friends-pop.component.scss']
})
export class InviteFriendsPopComponent implements OnInit {
  @Output() selectedAction = new EventEmitter<any>();
  usersList;
  selectedUsers = [];
  selectedUsersObject = [];
  constructor(public commonService: CommonService) { }
  ngOnInit(): void {
    this.checkIfData();
    this.getUsers('');
  }

  checkIfData() {
    if (localStorage.getItem("inviteDetails") !== null) {
      this.selectedUsers = JSON.parse(localStorage.invite);
      this.selectedUsersObject = JSON.parse(localStorage.inviteDetails);
    }
  }

  getUsers(value?) {
    const apiParams = {
      searchKey: value,
      pageLimit: 1000,
    }
    this.commonService._getUsers(apiParams).subscribe((response) => {
      this.usersList = response.data.rows;
      this.checkActiveUsers();
    });
  }

  checkActiveUsers() {
    this.selectedUsers.map((data) => {
      this.usersList.map((item) => {
        if (data == item.id) {
          item['isSelected'] = true;
        }
      });
    })
  }

  inviteUser(i) {
    if (!this.selectedUsers.includes(i.id)) {
      this.selectedUsers.push(i.id);
      this.selectedUsersObject.push(i);
      this.usersList.map((item) => {
        if (i.id == item.id) {
          item['isSelected'] = true;
        }
      });
    } else {
      let existing = this.selectedUsers.filter(
        part => part === i.id)[0];
      const idx = this.selectedUsers.indexOf(existing);
      if (idx !== -1) {
        this.selectedUsers.splice(idx, 1);
        this.selectedUsersObject.splice(idx, 1);
      }
      this.usersList.map((item) => {
        if (i.id == item.id) {
          item['isSelected'] = false;
        }
      });
    }
    localStorage.setItem('invite', JSON.stringify(this.selectedUsers));
    localStorage.setItem('inviteDetails', JSON.stringify(this.selectedUsersObject));
  }
  closePop(){
    this.selectedAction.emit();
  }
}
