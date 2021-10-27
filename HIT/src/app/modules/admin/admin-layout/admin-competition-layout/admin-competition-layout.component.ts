import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/core/service/api.service';
import {  Renderer2 } from '@angular/core'

@Component({
  selector: 'app-admin-competition-layout',
  templateUrl: './admin-competition-layout.component.html',
  styleUrls: ['./admin-competition-layout.component.scss']
})
export class AdminCompetitionLayoutComponent implements OnInit {
  isactive = 'leader';
  competition_detail;
  competition_result;
  competition_days;
  competition_club_view;
  gu_id;
  acive_player_value;
  competition_matches_view;
  loading = false;
  loggedIn = false;
  constructor(
    private service:ApiService ,
    private route:ActivatedRoute,
    public router: Router,
    private renderer: Renderer2
  ) {
    this.gu_id =this.route.snapshot.paramMap.get("id");
    localStorage.setItem('gu_id',this.gu_id)
   }
 
  ngOnInit(): void {
    if (localStorage.getItem("JWT_TOKEN") !== null) {
      this.loggedIn = true; 
    }
    this.ViewCompetitionDetail();
    this.ViewCompetitionDays();
  }
  onClick(data) {
    this.isactive  = data; 
  }
  onOptionSelect(data){
    this.isactive  = data;
    this.ViewCompetitionDetail();
    setTimeout(() => {
      window.scrollTo(0, 600);
    }, 1000);

  }
  ViewCompetitionDetail(){
    this.service.httpGet('/v1/admin/competition/view?referenceId=' + this.gu_id ).subscribe((response) => {
      this.competition_detail = response.data;
    });
  }
  ViewCompetitionDays(){
    this.loading = true;
    const data = [];
    this.service.httpGet('/v1/competition/match/dates/' + this.gu_id ).subscribe((response) => {
      const dates = response.data;
      dates.matchDates.forEach(el => {
        data.push(moment(el).format('YYYY-MM-DD'))
      });
      this.competition_days = [...new Set(data)];
      this.loading = false;
    });
  }
  get_acive_player_value(e){
    this.acive_player_value = e;
  }
  get_competition_club_view(e){
    this.competition_club_view = e;
  }
  get_competition_matches_view(e){
    this.competition_matches_view = e;
  }
}
