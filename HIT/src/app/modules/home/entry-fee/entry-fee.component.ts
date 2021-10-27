import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-entry-fee',
  templateUrl: './entry-fee.component.html',
  styleUrls: ['./entry-fee.component.scss']
})
export class EntryFeeComponent implements OnInit {

  matchesCount = [];
  friendsCount = [];
  gameDate = [];
  matchType;
  matchPrivacy;
  totalPrice = 0;
  price;
  textLength;
  clubData;
  competitionType;
  userName;
  competitionId;
  competitionName;
  season;
  paramsData;
  showCancelPop = false;
  editName = false;
  saveEditedName = false;
  notNumber = false;
  editedName='';
  cancelPopData;
  noOfDays;
  constructor(public commonService: CommonService, public router: Router, private toastr: ToastrService) { }
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
      this.gameDate = response.data.matchDates;
      this.countDates();
    });
  }
  countDates(){
    const dateArray = this.gameDate.map((item)=>{
      return moment(item).format('DD-MM-YYYY')
    });
    const unique = dateArray.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    this.noOfDays = unique;
    localStorage.setItem('noOfDays',this.noOfDays.length)
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
    if (localStorage.getItem("type") !== null) {
      this.matchType = localStorage.type;
    }
    if (localStorage.getItem("privacy") !== null) {
      this.matchPrivacy = localStorage.privacy;
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
    if (localStorage.getItem("selectedGameObject") !== null) {
      this.season = JSON.parse(localStorage.selectedGameObject)[0].season
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
  showSwapPopup() {
    this.showCancelPop = true;
    let popupDesc='';
    if(this.competitionType==1){
      popupDesc = 'Change One time to Championship ?';
    }else{
      popupDesc = 'Change Championship to One time ?';
    }
    this.cancelPopData = {
      id: 2,
      header: popupDesc,
      desc: 'All your Progress will be lost, if you change it !!'
    }
  }
  checkZero(event){
    // if(event.target.value.length === 0 && event.which === 48){
    //   event.preventDefault();
    // }
  }
  setPrice(event) {
    const priceCalculated = event.target.value * this.clubData.numberOfMatches;
    if (isNaN(priceCalculated)) {
      this.notNumber=true;
      return
    }else{
      this.notNumber=false;
    }
    // this.price = event.target.value;
    this.totalPrice = Math.round(priceCalculated * 100) / 100
    localStorage.setItem('cost', JSON.parse(JSON.stringify(this.price)));
  }
  setPriceFromLocal(e) {
    // this.totalPrice = e * this.clubData.numberOfMatches;
  }
  checkout() {
    const minPrice = Number(this.clubData?.minCostPerMatch);
    const price = Number(this.price)
    if (!this.totalPrice) {
      this.toastr.error('Price should not be empty');
      return;
    }
    else if(price < minPrice){
      this.toastr.error('Minimum amount required');
      return;
    }else {
      this.router.navigate(['/review-competition']);
    }
  }
  backTogame() {
    if (localStorage.type == 1) {
      this.router.navigate(['/choose-game']);
    } else {
      this.router.navigate(['/choose-championship']);
    }
  }
  editUserName(){
    this.competitionName = this.competitionName.replace(/\s\s+/g, ' ');
    this.editName = !this.editName;
  }
  setName(e){
    this.editedName=e;
    if(this.editedName.length>=1){
      this.saveEditedName = true;
    }else{
      this.saveEditedName = false;
    }
  }
  saveUserName() {
    const name = this.editedName+'@'+this.userName;
    this.commonService._userExists(name).subscribe((response) => {
      const status = response['message'];
      if (status==null) {
        localStorage.setItem('competitionName', this.editedName);
        this.competitionName = localStorage.competitionName;
        this.saveEditedName = false;
        this.editName = false;
      } else {
        this.competitionName = localStorage.competitionName;
        this.saveEditedName = false;
        this.editName = false;
        this.toastr.error('Competition name already taken');
        return;
      }
    });
  }
  omit_special_char(event)
  {   
    var k;  
    k = event.charCode;
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
  }
  howItWorks(){
    this.router.navigate([]).then(result => {  
      if(this.competitionType==1){
        window.open('/rules/how-to-join?mode=' + this.competitionType, '_blank');
      }else{
        window.open('/rules/how-to-join?mode=' + this.competitionType, '_blank');
      }
       
    });
  }
}
