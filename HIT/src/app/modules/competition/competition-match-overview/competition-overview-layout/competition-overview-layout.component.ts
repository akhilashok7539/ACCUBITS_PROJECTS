import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-competition-overview-layout',
  templateUrl: './competition-overview-layout.component.html',
  styleUrls: ['./competition-overview-layout.component.scss']
})
export class CompetitionOverviewLayoutComponent implements OnInit {
  isactive = 'Overview'
  competition_detail;
  match_overview_detail;
  view_match_played =[];
  view_lineup;
  loading1 = false;
  loading = false;
  match_id;
  view_overview = false; 
  gu_id = localStorage.getItem('gu_id');
  constructor(
    private service:ApiService,
    private route:ActivatedRoute
  ) {
    localStorage.setItem('competition_landing','0')
    this.route.queryParams.subscribe((res:any) => {
      if(res.view !== undefined){
        this.view_overview = true;
      } else {
        this.view_overview = false;
      }
    })
    this.match_id =this.route.snapshot.paramMap.get("id");
    this.route.paramMap.subscribe(params => {
      const found = this.route.snapshot.paramMap.get("typw")
      if(found === "2" ){
          this.isactive = "Lineups"
          setTimeout(() => {
            window.scrollTo(0, 600);
          }, 1000);

      }
    });
   }

  ngOnInit(): void {
    this.matchOverViewDetail();
    if(this.gu_id !== null) {
      this.ViewCompetitionDetail();
    }
    this.ViewPlayedMatches();
  }
  onClick(data){
    this.isactive = data;
  }
  ViewCompetitionDetail(){ 
    this.loading1 = true;
    this.service.httpGet('/v1/competition/' + this.gu_id ).subscribe((response) => {
      this.competition_detail = response.data;
      this.loading1 = false;
    });
  }
  matchOverViewDetail(){
    this.loading = true;
    this.service.httpGet('/v1/match/overview/' + this.match_id ).subscribe((response) => {
      this.match_overview_detail = response.data;
      this.loading = false;
    });
  }
  ViewPlayedMatches(){ 
    this.service.httpGet('/v1/match/played/list?matchId=' + this.match_id ).subscribe((response) => {
      this.view_match_played = response.data.rows;
    });
  }
  
}
 