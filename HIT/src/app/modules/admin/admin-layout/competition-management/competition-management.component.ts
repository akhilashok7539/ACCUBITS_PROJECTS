import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-competition-management',
  templateUrl: './competition-management.component.html',
  styleUrls: ['./competition-management.component.scss']
})
export class CompetitionManagementComponent implements OnInit {
  @ViewChild('searchFromInput') searchFromInput: ElementRef;
  @ViewChild('searchToInput') searchToInput: ElementRef;
  match_details=[];
  leagueFromDate = '';
  leagueToDate = '';
  total_mang_fee = 0;
  searchText='';
  p = 1;
  total = 0;
  limit = 10;
  constructor(private service: ApiService, private router: Router,public commonService: CommonService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCompetition();
    this.getTotalManagementFee();
  }
  getCompetition(){
    let apiParams;
    if(this.leagueFromDate !== '' && this.leagueToDate !== ''){
      if(this.leagueToDate < this.leagueFromDate) {
        this.toastr.error('Date Selection is Invalid')
        return false
      }
    }
    apiParams = {
      searchTerm: this.searchText,
      pageLimit: this.limit,
      pageNo: this.p,
      dateFrom: this.leagueFromDate,
      dateTo: this.leagueToDate,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/competitions?' + params).subscribe((response) => {
      this.match_details = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  getTotalManagementFee(){
    this.service.httpGet('/v1/admin/competitions/revenue').subscribe((response) => {
      this.total_mang_fee = response.data.totalManagementFee;
    });
  }
  searchGames() {
    this.p=1;
    this.getCompetition();
  }
  getData(e){
    this.searchText = e;
    this.p = 1;
    this.getCompetition();
  }
  paginateGames(e) {
    this.p = e;
    this.getCompetition();
  }
  toDateChanged(e) {
    if (e.value == null) {
      this.leagueToDate = '';
    } else {
      const end = e.value.setHours(23, 59, 59, 999);
      const date = new Date(end).toUTCString().split(' ').slice(0, 5).join(' ');
      this.leagueToDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
    }
  }
  fromDateChanged(e) {
    if (e.value == null) {
      this.leagueFromDate = '';
    } else {
      const start = e.value.setHours(0, 0, 0, 0);
      const date = new Date(start).toUTCString().split(' ').slice(0, 5).join(' ');
      this.leagueFromDate = moment(date).format('YYYY-MM-DD HH:MM:SS');
    }
  }
  clearFrom(){
    this.leagueFromDate = '';
    this.searchFromInput.nativeElement.value = '';
    this.getCompetition();
  }
  clearTo(){
    this.leagueToDate = '';
    this.searchToInput.nativeElement.value = '';
    this.getCompetition();
  }

  viewGame(item){
    this.router.navigateByUrl('/admin/layout/competition-management/match/' + item.guid)
    localStorage.setItem('competition_view_active_index' , '1');
  }
}
