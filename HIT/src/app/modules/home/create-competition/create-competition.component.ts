import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.scss']
})
export class CreateCompetitionComponent implements OnInit {

  constructor(public router: Router, public commonService: CommonService, private toastr: ToastrService) { }
  privacyArray = [
    {
      id: 1,
      name: "Public"
    },
    {
      id: 2,
      name: "Private"
    }
  ];
  searchValue = '';
  selectedUsers = [];
  selectedUsersObject = [];
  showPrivacy = false;
  userNameDarkened = false;
  showInviteDropdown = false;
  slectedFriendsPop = false;
  userNameVerified = true;
  competitionId;
  usersList = [];
  competitionType;
  privacySelected = '';
  competitionName = '';
  friendsSearchKey = '';
  friendsCount=0;
  selectedAll = false;
  userName;
  ngOnInit(): void {
    this.getGuid();
    this.checkIfData();
    console.log("Lang",localStorage.getItem('lang'));
    
  }
  addSelect()
  {
    console.log("clicked");
    
  }
  checkIfData() {
    if (localStorage.getItem("type") !== null) {
      this.competitionType = localStorage.type;
    }
    if (localStorage.getItem("userName") !== null) {
      this.userName = localStorage.userName;
    }
    if (localStorage.getItem("inviteDetails") !== null) {
      this.selectedUsers = JSON.parse(localStorage.invite);
      this.selectedUsersObject = JSON.parse(localStorage.inviteDetails);
    }
    if (localStorage.getItem("privacy") !== null) {
      if (localStorage.privacy == 1) {
        this.privacySelected = 'Public';
      } else {
        this.privacySelected = 'Private';
      }
    }
    if (localStorage.getItem("competitionName") !== null) {
      this.competitionName = localStorage.competitionName;
    }
  }
  chooseGame() {
    if (this.competitionName == '' && this.competitionType == 1) {
      this.toastr.error('Competition name should not be empty');
      return;
    }
    if (this.privacySelected == '') {
      this.toastr.error('Choose privacy');
      return;
    }
    if (!this.userNameVerified) {
      this.toastr.error('Competition name already exists');
      return;
    }
    localStorage.setItem('competitionName', this.competitionName);
    if (localStorage.type == 1) {
      this.router.navigate(['/choose-game']);
    } else {
      this.router.navigate(['/choose-championship']);
    }
  }
  getGuid() {
    this.commonService._getGuId().subscribe((response) => {
      localStorage.setItem('competitionId', JSON.stringify(response.data));
      this.competitionId = JSON.parse(localStorage.competitionId);
    });
  }
  privacyDropdown() {
    this.showPrivacy = !this.showPrivacy;
    console.log("Lang",localStorage.getItem('lang'));
    if(localStorage.getItem('lang') === 'en')
    {
      this.privacyArray = [
        {
          id: 1,
          name: "Public"
        },
        {
          id: 2,
          name: "Private"
        }
      ];
    }
    if(localStorage.getItem('lang') === 'por')
    {
      this.privacyArray = [
        {
          id: 1,
          name: "Pública"
        },
        {
          id: 2,
          name: "Privada"
        }
      ];
    }

  }
  closePrivacyDropdown(event): void {
    if (event) {
      if (this.showPrivacy) {
        this.showPrivacy = false;
      }
    }
  }
  getUsers(value) {
    this.friendsSearchKey = value;
    this.showFriendsList();
  }
  showFriendsList() {
    console.log(this.selectedUsers)
    this.showInviteDropdown = true;
    this.getFriendsList();
  }
  getFriendsList() {
    const apiParams = {
      searchKey: this.friendsSearchKey,
      isAll: 1,
    }
    this.commonService._getUsers(apiParams).subscribe((response) => {
      this.usersList = response.data.rows;
      this.friendsCount = response.data.friendsCount;
      this.showInviteDropdown = true;
      this.checkActiveUsers();
      if(this.friendsCount == this.selectedUsers.length){
        this.selectedAll = true;
      }
    });
  }
  closeInviteDropdown(event): void {
    if (event) {
      if (this.showInviteDropdown) {
        this.showInviteDropdown = false;
        this.searchValue = '';
      }
    }
  }
  selectUsers(i) {
    this.selectedAll = false;
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
  selectAllUsers() {
    this.selectedUsers = [];
    this.selectedUsersObject = [];
    this.friendsSearchKey = '';
    this.searchValue = '';
    this.getFriendsList();
    setTimeout(() => {
      if (!this.selectedAll) {
        this.usersList.map((item) => {
          this.selectedUsers.push(item.id);
          this.selectedUsersObject.push(item);
          item['isSelected'] = true;
        })
        this.selectedAll = true;
      } else {
        this.usersList.map((item) => {
          item['isSelected'] = false;
        })
        this.selectedAll = false;
      }
      localStorage.setItem('invite', JSON.stringify(this.selectedUsers));
      localStorage.setItem('inviteDetails', JSON.stringify(this.selectedUsersObject));
    }, 500);
    
  }
  selectedUser(i) {
    let existing = this.selectedUsers.filter(
      part => part === i.data.id)[0];
    const idx = this.selectedUsers.indexOf(existing);
    if (idx !== -1) {
      this.selectedUsers.splice(idx, 1);
      this.selectedUsersObject.splice(idx, 1);
    }
    localStorage.setItem('invite', JSON.stringify(this.selectedUsers));
    localStorage.setItem('inviteDetails', JSON.stringify(this.selectedUsersObject));
  }
  closeSelectedUser() {
    this.slectedFriendsPop = false;
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
  selectedPrivacy(e) {
    localStorage.setItem('privacy', e.data.id);
    this.privacySelected = e.data.name;
    this.showPrivacy = false;
  }
  addCompetitionName(e) {
    this.competitionName = e;
    this.checkUsername();
  }
  checkUsername() {
    const name = this.competitionName + '@' + this.userName;
    this.commonService._userExists(name).subscribe((response) => {
      const status = response['message'];
      if (status == null) {
        this.userNameVerified = true;
      } else {
        this.userNameVerified = false;
      }
    });
  }
  clearInvites() {
    this.selectedUsers = [];
    this.selectedUsersObject = [];
    localStorage.setItem('invite', JSON.stringify(this.selectedUsers));
    localStorage.setItem('inviteDetails', JSON.stringify(this.selectedUsersObject));
  }
  showInvitedList() {
    this.slectedFriendsPop = true;
  }
  revertName(e) {
    this.userNameDarkened = false;
  }
  darken(e) {
    this.userNameDarkened = true;
  }
  omit_special_char(event) {
    var k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }
}
