import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-teams-clubs-view',
  templateUrl: './teams-clubs-view.component.html',
  styleUrls: ['./teams-clubs-view.component.scss']
})
export class TeamsClubsViewComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
  envurl='';
  popTeams = false; 
  dataLimit = 10;
  dataCount;
  teamsClubs = [];
  leagueList=[];
  leagueCount:any;
  leaguePage = 1;
  popular = 'Popular Teams'
  constructor(private service:ApiService, 
    private router: Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    localStorage.setItem('navigate_to_competetion', null)
    this.envurl = environment.api_url;
    this.listTeamsClubs();
    this.leaguesList();
  }
  loadMoreData() {
    this.dataLimit = this.dataLimit + 10;
    this.listTeamsClubs();
  }
  listTeamsClubs(type?){
    this.popTeams = false;
    var url = '';
    url=`/v1/match/view/upcoming?`
    if(type){
      this.popular = type.name;
      url += `&pageLimit=100&leagueId=`+type.id
    }
    this.service.httpGet(url).subscribe((response) => {
       var teamsClubs=response.data.rows;
       this.dataCount = response.data.totalCount;
        teamsClubs.map((x)=>{
          if(x.upcomingMatch.message==''){
            if((x.teamId)==(x.upcomingMatch.awayTeam['id'])){
              x.logo1 = x.upcomingMatch.awayTeam.logo;
              x.logo2 = x.upcomingMatch.homeTeam.logo;
              x.name1 = x.upcomingMatch.awayTeam.name;
              x.name2 = x.upcomingMatch.homeTeam.name;
            }else if((x.teamId)==(x.upcomingMatch.homeTeam['id'])){
             x.logo2 = x.upcomingMatch.awayTeam.logo;
              x.logo1 = x.upcomingMatch.homeTeam.logo;
              x.name2 = x.upcomingMatch.awayTeam.name;
              x.name1 = x.upcomingMatch.homeTeam.name;
            }
          }else{
            x.logo1 = x.team.logo;
            x.name1 = x.team.name;
          }
         
         if(!x.status){
          x.status = 0;
        }
       })
        this.teamsClubs = teamsClubs;
    },
    (error) => {

      this.toastr.error(error.error.message);
    });
 }
 leaguesList(str?){
  this.service.httpGet(`/v1/league/list?pageNo=1&pageLimit=5000`).subscribe((response) => {
    if(str){
      this.leagueList.concat(response.data.leagues.rows);
    }else{
      this.leagueList = response.data.leagues.rows;
      this.leagueCount = response.data.leagues.count;
    }
   
    if(this.leagueCount>this.leaguesList.length){
      this.leaguePage = this.leaguePage + 1;
      if((this.leaguePage-1)*100 <= this.leagueCount){
        // this.leaguesList('next');
      }
     
    }else{
      this.leaguePage = 1;
    }
  });
}
closeDropdownTeams(event):void{
  if (event) {
    if(this.popTeams){
      this.popTeams=false;
    }
  }
}
onSelectCompetitionTeam(data){
  window.open('/team/' + data.team.id, "_blank");
 } 
 pageLikeUnlike(id,i){
  var data = {
    "teamId": id,
    "status": 1 
}
if(localStorage.getItem('userName')) {
  this.service.httpPost(`/v1/feed/page/like`,data).subscribe((response) => {
    this.teamsClubs[i].totalLike = this.teamsClubs[i].totalLike + 1;
    this.teamsClubs[i].isLikedPage = true;
  });
} else {
  this.router.navigateByUrl('/user')
}
}
}
