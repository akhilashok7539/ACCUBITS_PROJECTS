import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.scss']
})
export class ChooseGameComponent implements OnInit {
  @ViewChild('searchFromInput') searchFromInput: ElementRef;
  @ViewChild('searchToInput') searchToInput: ElementRef;
  trendingGames =[];
  allLeagues = [];
  leagueFromDate = '';
  leagueToDate = '';
  startDate = '';
  endDate = '';
  leagueId = '';
  leagueName = '';
  filterText = '';
  todayDate:Date = new Date();
  selectedGames = [];
  selectedGamesObject = [];
  p = 1;
  total = 0;
  limit = 10;
  showLeague = false;
  competitionType;
  showCancelPop = false;
  cancelPopData;
  placeholderTo: string = 'To';
  placeholderFrom: string = 'From';
  envurl = '';
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
  checkIfData() {
    if (localStorage.getItem("selectedGameObject") !== null) {
      this.selectedGames = JSON.parse(localStorage.selectedGame);
      this.selectedGamesObject = JSON.parse(localStorage.selectedGameObject);
    }
    if (localStorage.getItem("type") !== null) {
      this.competitionType = localStorage.type;
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

  gotoEntryFee() {
    // if(this.selectedGames.length < 1){
    //   this.toastr.error('Minimum 1 game required');
    //   return;
    // }
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
    console.log(this.leagueFromDate);
    
    const apiParams = {
      competitionType: localStorage.type,
      pageLimit: this.limit,
      pageNo: this.p,
      fromDate: this.leagueFromDate,
      toDate: this.leagueToDate,
      leagueId: this.leagueId,
      timezone:this.timezone
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
    this.p = 1;
    this.dateFormat();
    if(this.leagueToDate&&!this.leagueFromDate){
  
      const start = this.today.setHours(0, 0, 0, 0);
      const date = new Date(start).toUTCString().split(' ').slice(0, 5).join(' ');
      // this.leagueFromDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
      this.leagueFromDate = moment(date).format('YYYY-MM-DD HH:MM:SS');

    }
    this.getGames();
  }
  dateFormat() {
    if(this.startDate!==''){
      const e = this.startDate;
      const end = new Date(e).setHours(0, 0, 0, 0);
      const date = new Date(end).toUTCString().split(' ').slice(0, 5).join(' ');
      // this.leagueFromDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
      this.leagueFromDate = moment(this.startDate).format('YYYY-MM-DD HH:MM:SS');
      console.log("start date selected",this.startDate) 

      console.log("start date converted",this.leagueFromDate) 

    }
    if(this.endDate!==''){
      const e = this.endDate;
      const end = new Date(e).setHours(23, 59, 59, 999);
      const date = new Date(end).toUTCString().split(' ').slice(0, 5).join(' ');
      // this.leagueToDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
      this.leagueToDate = moment(this.endDate).format('YYYY-MM-DD HH:MM:SS');
      console.log("start date and end date",this.leagueToDate) 

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
  selectedLeague(e) {
    this.leagueId = e.id;
    this.leagueName = e.name;
    this.showLeague = false;
    this.filterText = '';
  }
  clearLeague() {
    this.leagueId = '';
    this.leagueName = '';
  }

  selectGame(i) {
   
    if (!this.selectedGames.includes(i.id)) {
      if(this.selectedGames.length == 20){
        this.toastr.error('Not able to select more than 20 games');
        return;
      }
      this.selectedGames.push(i.id);
      this.selectedGamesObject.push(i);
      this.trendingGames.map((item) => {
        if (i.id == item.id) {
          item['isSelected'] = true;
        }
      });
    } else {
      let existing = this.selectedGames.filter(
        part => part === i.id)[0];
      const idx = this.selectedGames.indexOf(existing);
      if (idx !== -1) {
        this.selectedGames.splice(idx, 1);
        this.selectedGamesObject.splice(idx, 1);
      }
      this.trendingGames.map((item) => {
        if (i.id == item.id) {
          item['isSelected'] = false;
        }
      });
    }
    localStorage.setItem('selectedGame', JSON.stringify(this.selectedGames));
    localStorage.setItem('selectedGameObject', JSON.stringify(this.selectedGamesObject));
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
  viewGame(item) {
    this.router.navigateByUrl('/competition/overview/match/' + item.id + '?view=0')
    localStorage.setItem('competition_view_active_index' , '1');

  }
  goToCreateCompetition(type) {
    localStorage.setItem('type', type)
    this.router.navigate(['/create-competition']);
  }

}
