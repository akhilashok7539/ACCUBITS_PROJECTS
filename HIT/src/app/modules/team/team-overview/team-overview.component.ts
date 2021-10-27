import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {
  @Input() team_id;
  overview ;
  constructor(
    private service:ApiService ,
    private route:ActivatedRoute
  ) { }

  envurl='';
  ngOnInit(): void {
    localStorage.setItem('navigate_to_competetion', null)
    this.envurl = environment.api_url;
    this.viewOverviewDetail();
  }
  viewOverviewDetail(){
    this.service.httpGet('/v1/competition/club/detail?teamId=' + this.team_id ).subscribe((response) => {
      this.overview = response.data;
    });
  }
 
}
