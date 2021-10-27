import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent implements OnInit {

  matchesCount = [];
  friendsCount = [];
  matchType;
  matchPrivacy;
  price = 0;
  clubData;
  competitionType;
  userName;
  competitionId;
  competitionName;
  paramsData;
  gameDays;

  @Output() reviewAction = new EventEmitter<any>();
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.checkIfData();
    this.getPreview();
  }
  getPreview() {
    if (this.competitionType == 1) {
      this.paramsData = {
        referenceId: this.competitionId.referenceId,
        matches: this.matchesCount
      }
    } else {
      this.paramsData = {
        referenceId: this.competitionId.referenceId,
        seasonId: localStorage.leagueId
      }
    }
    this.commonService._getCompetitionPreview(this.paramsData).subscribe((response) => {
      this.clubData = response.data;
    });
  }
  checkIfData() {
    if (localStorage.getItem("type") !== null) {
      this.competitionType = localStorage.type;
    }
    if (localStorage.getItem("selectedGame") !== null) {
      this.matchesCount = JSON.parse(localStorage.selectedGame);
    }
    if (localStorage.getItem("invite") !== null) {
      this.friendsCount = JSON.parse(localStorage.invite);
    }
    if (localStorage.getItem("matchType") !== null) {
      this.matchType = localStorage.type;
    }
    if (localStorage.getItem("privacy") !== null) {
      this.matchPrivacy = localStorage.privacy;
    }
    if (localStorage.getItem("cost") !== null) {
      this.price = localStorage.cost;
    }
    if (localStorage.getItem("competitionId") !== null) {
      this.competitionId = JSON.parse(localStorage.competitionId);
    }
    if (localStorage.getItem("userName") !== null) {
      this.userName = localStorage.userName;
    }
    if (localStorage.getItem("competitionName") !== null) {
      this.competitionName = localStorage.competitionName;
    }
    if (localStorage.getItem("noOfDays") !== null) {
      this.gameDays = localStorage.noOfDays;
    }
  }
  createChampionship(e){
    this.reviewAction.emit(e);
  }
  closePopup(e){
    this.reviewAction.emit(e);
  }
}
