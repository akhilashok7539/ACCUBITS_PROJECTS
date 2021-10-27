import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-competiton-match-lineup',
  templateUrl: './competiton-match-lineup.component.html',
  styleUrls: ['./competiton-match-lineup.component.scss']
})
export class CompetitonMatchLineupComponent implements OnInit {
  @Input() match_overview_detail;
  @Input() match_id;
  data = [];
  teams;
  team_logo;
  team_name;
   team_id = 185248;
  constructor(
    private service:ApiService ,
    private route:ActivatedRoute
  ) { }

  envurl='';
  ngOnInit(): void {
    this.envurl = environment.api_url;
    this.team_logo = this.match_overview_detail.awayTeam.logo;
    this.team_name = this.match_overview_detail.awayTeam.name;
    this.viewSquadDetail();
  }
  viewSquadDetail(){
    this.service.httpGet('/v1/match/squad/' + this.match_id ).subscribe((response) => {
      this.teams = response.data;
      this.data = this.teams.awayTeamPlayers;
    });
  }
  onNext(){
    if(this.team_name === this.match_overview_detail.awayTeam.name) {
      this.team_logo = this.match_overview_detail.homeTeam.logo;
      this.team_name = this.match_overview_detail.homeTeam.name;
      this.data = this.teams.homeTeamPlayers;
    } else {
      this.team_logo = this.match_overview_detail.awayTeam.logo;
      this.team_name = this.match_overview_detail.awayTeam.name;
      this.data = this.teams.awayTeamPlayers;
    }
  }
}
