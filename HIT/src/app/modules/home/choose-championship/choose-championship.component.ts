import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-choose-championship',
  templateUrl: './choose-championship.component.html',
  styleUrls: ['./choose-championship.component.scss']
}) 
export class ChooseChampionshipComponent implements OnInit {
  @ViewChild('searchFromInput') searchFromInput: ElementRef;
  @ViewChild('searchToInput') searchToInput: ElementRef;
  trendingGames;
  allLeagues=[];
  leagueFromDate = '';
  leagueToDate = '';
  leagueId = '';
  leagueName = '';
  startDate = '';
  endDate = '';
  filterText = '';
  todayDate:Date = new Date(); 
  selectedGames = [];
  selectedGamesObject = [];
  p = 1;
  total = 0;
  limit = 10;
  showLeague = false;
  showCancelPop = false;
  cancelPopData;
  competitionType;
  placeholderTo: string = 'To';
  placeholderFrom: string = 'From';
  envurl = '';
  competitionName = '';
  userName;
  today = new Date();
  constructor(public router: Router, public commonService: CommonService, private toastr: ToastrService) { }
  timezone = this.toIsoString();

  ngOnInit(): void {
    this.checkIfData();
    this.getGames();
    this.getLeague();
    this.envurl = environment.api_url;
  }
  toIsoString() {
    let date = new Date().getTimezoneOffset();
   var tzo = -date,
       dif = tzo >= 0 ? '+' : '-',
       pad = function(num) {
           var norm = Math.floor(Math.abs(num));
           return (norm < 10 ? '0' : '') + norm;
       };
 
   return dif + pad(tzo / 60) +
       ':' + pad(tzo % 60);
 }
  checkIfData(){
    if (localStorage.getItem("userName") !== null) {
      this.userName = localStorage.userName;
    }
    if (localStorage.getItem("selectedGameObject") !== null) {
      this.selectedGames = JSON.parse(localStorage.selectedGame);
      this.selectedGamesObject = JSON.parse(localStorage.selectedGameObject);
    }
    if(localStorage.getItem("type") !== null){
      this.competitionType = localStorage.type;
    }
  }
  cancelEvent(e){
    if(e==1){
      this.commonService.removeCompetitionData();
      this.router.navigate(['/choose-competition']);
    }else{
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
  gotoEntryFee() {
    if (this.selectedGames.length == 0) {
      this.toastr.error('Select a game and proceed');
      return;
    }
    this.router.navigate(['/entry-fee']);
  }
  leagueDropdown() {
    this.showLeague = !this.showLeague;
  }
  closeLeagueDropdown(event): void {
    if (event) {
      if (this.showLeague) {
        this.showLeague = false;
      }
    }
  }
  getGames() {
    const apiParams = {
      competitionType: localStorage.type,
      pageLimit: this.limit,
      pageNo: this.p,
      fromDate: this.leagueFromDate,
      toDate: this.leagueToDate,
      leagueId: this.leagueId,
      timezone:this.timezone,
    };
    this.commonService._getGames(this.commonService.removeEmptyStrings(apiParams)).subscribe((response) => {
      this.trendingGames = response.data.rows;
      this.total = response.data.totalCount;
      this.checkActiveUsers();
    });
  }
  paginateGames(e) {
    this.p = e;
    this.getGames();
  }
  getLeague() {
    const apiParams = {
      competitionType: localStorage.type,
    };
    this.commonService._getLeague(this.commonService.removeEmptyStrings(apiParams)).subscribe((response) => {
      this.allLeagues = response.data.leagues;
    });
  }
  searchGames() {
    this.dateFormat();
    if(this.leagueToDate&&!this.leagueFromDate){
      const start = this.today.setHours(0, 0, 0, 0);
      const date = new Date(start).toUTCString().split(' ').slice(0, 5).join(' ');
      this.leagueFromDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
    }
    this.getGames();
  }
  dateFormat() {
    if(this.startDate!==''){
      const e = this.startDate;
      const end = new Date(e).setHours(0, 0, 0, 0);
      const date = new Date(end).toUTCString().split(' ').slice(0, 5).join(' ');
      this.leagueFromDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
    }
    if(this.endDate!==''){
      const e = this.endDate;
      const end = new Date(e).setHours(23, 59, 59, 999);
      const date = new Date(end).toUTCString().split(' ').slice(0, 5).join(' ');
      this.leagueToDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
    }
  }
  clearFrom(){
    this.startDate = '';
    this.leagueFromDate = '';
  }
  clearTo(){
    this.endDate = '';
    this.leagueToDate = '';
  }
  selectedLeague(e){
    this.leagueId = e.id;
    this.leagueName = e.name;
    this.showLeague = false;
    this.filterText = '';
  }
  clearLeague(){
    this.leagueId = '';
    this.leagueName = '';
  }

  selectGame(i){
    const name = i.league.name+i.season+'@'+this.userName;
    this.commonService._userExists(name).subscribe((response) => {
      const status = response['message'];
      if (status!==null) {
        this.toastr.error("You have already selected this championship");
        return
      }else{
        this.addGame(i)
      } 
    });
  }
  addGame(i){
    this.selectedGames=[];
    this.selectedGamesObject=[];
    this.selectedGames.push(i.id);
    this.selectedGamesObject.push(i);
    this.trendingGames.map((item) => {
      if (i.id == item.id) {
        item['isSelected'] = true;
      }else{
        item['isSelected'] = false;
      }
    });
    localStorage.setItem('selectedGame',JSON.stringify(this.selectedGames));
    localStorage.setItem('selectedGameObject',JSON.stringify(this.selectedGamesObject));
    localStorage.setItem('leagueId',i.id);
    // comment league name changes when click on checkbox 

    // localStorage.setItem('competitionName', i.league.name);
  }

 

  checkActiveUsers() {
    this.selectedGames.map((data) => {
      this.trendingGames.map((item) => {
        if (data == item.id) {
          item['isSelected'] = true;
        }
      });
    })
  }

}
