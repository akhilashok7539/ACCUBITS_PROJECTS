import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/core/service/api.service';
import {  Renderer2 } from '@angular/core'

@Component({
  selector: 'app-competition-layout',
  templateUrl: './competition-layout.component.html',
  styleUrls: ['./competition-layout.component.scss']
})
export class CompetitionLayoutComponent implements OnInit {
  isactive = 'Matches';
  competition_detail;
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
    localStorage.setItem('competition_landing','0')
    const active_index = localStorage.getItem('competition_view_active_index');
        if(active_index === '1'){
          this.isactive = 'Matches';
        } else if(active_index === '2'){
          this.isactive = 'Clubs';
        } else if(active_index === '3'){
          this.isactive = 'leader';
        } else if(active_index === '4'){
          this.isactive = 'result';
        }
    this.ViewCompetitionDetail();
    this.ViewCompetitionDays();
  }
  onClick(data) {
    this.isactive  = data; 
    if(data === 'Matches'){
      localStorage.setItem('competition_view_active_index' , '1');
    } else if(data === 'Clubs'){
      localStorage.setItem('competition_view_active_index' , '2');
    } else if(data === 'leader'){
      localStorage.setItem('competition_view_active_index' , '3');
    } else if(data === 'result'){
      localStorage.setItem('competition_view_active_index' , '4');
    }
  }
  onOptionSelect(data){
    this.isactive  = data;
    this.ViewCompetitionDetail();
    setTimeout(() => {
      window.scrollTo(0, 600);
    }, 1000);

  }
  ViewCompetitionDetail(){
    this.service.httpGet('/v1/competition/' + this.gu_id ).subscribe((response) => {
      this.competition_detail = response.data;
      localStorage.setItem("status_comp",this.competition_detail.status)
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
