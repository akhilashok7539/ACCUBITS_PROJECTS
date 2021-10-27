import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-fixtures',
  templateUrl: './team-fixtures.component.html',
  styleUrls: ['./team-fixtures.component.scss']
})
export class TeamFixturesComponent implements OnInit {
  fixture_detail = [];
  @Input() team_id;
  constructor(
    private service:ApiService ,
    private route:ActivatedRoute
  ) { }

  envurl='';
  ngOnInit(): void {
    this.envurl = environment.api_url;
    this.viewFixturesDetail();
  }
  viewFixturesDetail(){
    this.service.httpGet('/v1/team/page/fixture?teamId=' + this.team_id ).subscribe((response) => {
      this.fixture_detail = response.data.rows;
    });
  }
}
