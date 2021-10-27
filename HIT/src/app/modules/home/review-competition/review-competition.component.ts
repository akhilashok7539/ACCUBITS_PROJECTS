import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare let fbq: Function;
declare global {
  interface Window { dataLayer: any; }
}
@Component({
  selector: 'app-review-competition',
  templateUrl: './review-competition.component.html',
  styleUrls: ['./review-competition.component.scss'] 
})
export class ReviewCompetitionComponent implements OnInit {
  friendsList = [];
  friendsListId = [];
  showCancelPop = false;
  reviewPop = false;
  invitePop = false;
  competitionType;
  userName;
  competitionCodes;
  competitionName;
  cancelPopData;
  editName = false;
  saveEditedName = false;
  editedName = '';
  textLength;
  constructor(public commonService: CommonService, public router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.checkIfData();
  }

  checkIfData() {
    if (localStorage.getItem("type") !== null) {
      this.competitionType = localStorage.type;
    }
    if (localStorage.getItem("inviteDetails") !== null) {
      this.friendsList = JSON.parse(localStorage.inviteDetails);
      this.friendsListId = JSON.parse(localStorage.invite);
    }
    if (localStorage.getItem("competitionId") !== null) {
      this.competitionCodes = JSON.parse(localStorage.competitionId);
    }
    if (localStorage.getItem("competitionName") !== null) {
      this.competitionName = localStorage.competitionName;
    }
    if (localStorage.getItem("userName") !== null) {
      this.userName = localStorage.userName;
    }
  }

  cancelEvent(e) {
    if (e == 1) {
      this.commonService.removeCompetitionData();
      this.router.navigate(['/choose-competition']);
    } else {
      this.showCancelPop = false;
    }
  }
  showCancelPopup() {
    this.showCancelPop = true;
    this.cancelPopData = {
      id: 1,
      header: 'Are you sure to cancel ?',
      desc: 'All your Progress will be lost, if you cancel it .'
    }
  }
  showSwapPopup() {
    this.showCancelPop = true;
    let popupDesc = '';
    if (this.competitionType == 1) {
      popupDesc = 'Change One time to Championship ?';
    } else {
      popupDesc = 'Change Championship to One time ?';
    }
    this.cancelPopData = {
      id: 2,
      header: popupDesc,
      desc: 'All your Progress will be lost, if you change it !!'
    }
  }
  createCompetition() {
    const competitionId = JSON.parse(localStorage.competitionId);
    const matchesFromLocal = JSON.parse(localStorage.selectedGame);
    const ApiParams = {
      referenceId: competitionId.referenceId,
      name: localStorage.competitionName + '@' + this.userName,
      competitionId: competitionId.competitionId,
      type: localStorage.type,
      privacy: localStorage.privacy,
      inviteCode: competitionId.inviteCode,
      entryCostInUSD: localStorage.cost,
      entryCostInCoin: localStorage.cost,
      matches: JSON.parse(localStorage.selectedGame),
    };
    if (localStorage.getItem("invite") !== null) {
      ApiParams['inviteArray'] = JSON.parse(localStorage.invite);
    } else {
      ApiParams['inviteArray'] = [];
    }

    if (localStorage.type == 2) {
      ApiParams['seasonId'] = localStorage.leagueId;
    }
    this.commonService._createCompetition(ApiParams).subscribe((response) => {
      this.toastr.success(response.message);
      let id = response['data'].competitionId 
      this.router.navigateByUrl('/competition/details/' + id + '?popup=true');
      console.log(response);
      // fbq('trackCustom', 'CreateCompetition', { name: this.competitionName });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'create_competition',
        'competitionName': this.competitionName 
      });
      this.commonService.removeCompetitionData();
    });
  }
  backTogame() {
    if (localStorage.type == 1) {
      this.router.navigate(['/choose-game']);
    } else {
      this.router.navigate(['/choose-championship']);
    }
  }
  reviewCompetition() {
    this.reviewPop = true;
  }
  reviewPopupAction(e) {
    if (e == 1) {
      this.reviewPop = false;
    } else {
      this.createCompetition();
    }
  }
  editUserName() {
    this.competitionName = this.competitionName.replace(/\s\s+/g, ' ');
    this.editName = !this.editName;
  }
  setName(e) {
    this.editedName = e;
    if (this.editedName.length >= 1) {
      this.saveEditedName = true;
    } else {
      this.saveEditedName = false;
    }
  }
  saveUserName() {
    const name = this.editedName + '@' + this.userName;
    this.commonService._userExists(name).subscribe((response) => {
      const status = response['message'];
      if (status == null) {
        localStorage.setItem('competitionName', this.editedName);
        this.competitionName = localStorage.competitionName;
        this.saveEditedName = false;
        this.editName = false;
      } else {
        this.competitionName = localStorage.competitionName;
        this.saveEditedName = false;
        this.editName = false
        this.toastr.error('Competition name already taken');
        return;
      }
    });
  }
  closeInviteFriensPop() {
    this.checkIfData();
    this.invitePop = false;
  }
  inviteFriendsPop() {
    this.invitePop = true;
  }
  removeFriend(i) {
    let existing = this.friendsListId.filter(
      part => part === i.id)[0];
    const idx = this.friendsListId.indexOf(existing);
    if (idx !== -1) {
      this.friendsListId.splice(idx, 1);
      this.friendsList.splice(idx, 1);
    }
    localStorage.setItem('invite', JSON.stringify(this.friendsListId));
    localStorage.setItem('inviteDetails', JSON.stringify(this.friendsList));
  }
  omit_special_char(event) {
    var k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }
}
