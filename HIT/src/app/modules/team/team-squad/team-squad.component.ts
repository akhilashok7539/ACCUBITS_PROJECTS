import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.scss']
})
export class TeamSquadComponent implements OnInit {
  data = [];
  envurl='';
  @Input() team_id;
  constructor(
    private service:ApiService ,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.envurl = environment.api_url;
    this.viewSquadDetail();
  }
  viewSquadDetail(){
    this.service.httpGet('/v1/team/page/squad?teamId=' + this.team_id ).subscribe((response) => {
      this.data = response.data.players;
    });
  }

}
