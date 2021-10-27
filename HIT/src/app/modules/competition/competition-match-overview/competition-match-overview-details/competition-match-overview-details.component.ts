import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/core/service/api.service';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-competition-match-overview-details',
  templateUrl: './competition-match-overview-details.component.html',
  styleUrls: ['./competition-match-overview-details.component.scss'] 
})
export class CompetitionMatchOverviewDetailsComponent implements OnInit {
  @Input() gu_id;
  @Input() match_id;
  betting_popup = false;
  competition_detail ;
  loading = false;
  constructor(
    private router:Router,
    private service:ApiService ,
    private _location: Location,
    private dataService:DataServiceService
  ) { }

  ngOnInit(): void {
    this. ViewCompetitionDetail();
  }
  ViewCompetitionDetail(){
    this.loading = true;
    if(this.gu_id === null) {
      this.gu_id = localStorage.getItem('gu_id');
    }
    this.service.httpGet('/v1/competition/' + this.gu_id ).subscribe((response) => {
      this.competition_detail = response.data;
      this.loading = false;
    });
  }
  onExistingplayerNAvigate(){
    this.router.navigateByUrl('/competition/betting/' + this.competition_detail.guid)
  }
  disableinputbasedonDate  (data){
    if( moment(data).subtract(3600, 'seconds').format('YYYY-MM-DD HH:mm:ss') >= moment(new Date).format('YYYY-MM-DD HH:mm:ss')){
      return false
    }else {
      return true
    }
}
  onBack(){ 
    this._location.back();
    if(localStorage.getItem('go_to_home_from_overview') == 'true'){
      localStorage.setItem('go_to_home_from_overview','false')
      // this.router.navigateByUrl('/');
    } else {
      localStorage.setItem('go_to_home','true')
      // this.router.navigateByUrl('/competition/details/' + this.gu_id);
    }
  }
  onNavigate() {
    this.betting_popup = true;
  } 
  onClose(){
    this.betting_popup = false;
  }
  shareToFeed(item){
    localStorage.setItem('match_id',this.match_id);
    this.dataService.toShareCompetition(item.guid,'overview')
    this.router.navigateByUrl('/feed')
  }
}
