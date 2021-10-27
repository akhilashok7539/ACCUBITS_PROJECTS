import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { TwilloService } from 'src/app/core/service/twillo.service';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { AuthService } from '../../core/service/auth.service';
import { CommonService } from '../../core/service/common.service';
import { CompetitionGamesComponent } from './competition-games/competition-games.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@HostListener('window:scroll', ['$event']) 
export class HomeComponent implements OnInit {
  @ViewChild(CompetitionGamesComponent) child!: CompetitionGamesComponent;
  fixed = false;
  constructor(public commonService: CommonService,    
    private twilloService: TwilloService, 
    private route: ActivatedRoute,
    private router:Router, 
    private auth: AuthService,
    private dataService:DataServiceService,
    private service:ApiService) { }

  ngOnInit(): void {
    // this.commonService.removeCompetitionData();
    this.route.queryParams.subscribe(params => {
      if(Object.keys(params).length!=0){
        this.loginWithParams(params)
        // this.loginsocialApicalls();
      }
    });
    if(localStorage.getItem('navigate_to_competetion') !== null){
      const gu_id = localStorage.getItem('navigate_to_competetion');
      localStorage.setItem('navigate_to_competetion', null)
      if(gu_id !== null && gu_id !== "null") {
        this.service.httpGet('/v1/competition/' + gu_id ).subscribe((response) => {
          if(response.data.isPlayer === 0){
            this.router.navigateByUrl('/competition/details/' + gu_id)
          } else {
            this.router.navigateByUrl('/competition/betting/' + gu_id)
          }
        });
      }
    }
  }
  onScroll(event) {
    const mainDiv = document.getElementById('section');  
    if(mainDiv.scrollTop>10){
      this.fixed=true;
    }else{
      this.fixed=false;
    }
  }

  loginWithParams(data){
    const apiData = {
      "referenceId": data.referenceId
    }
    this.service.httpPost(`/v1/auth/social/login`,apiData).subscribe((response) => { 
      localStorage.setItem('twilio_token',response.data.token.twilio)
      localStorage.setItem('userName', response.data.userProfile.username);
      this.twilloService.ngOnInit(); 
      this.auth.storeTokens(response.data.token);
      console.log(response)
      if(response.data.userProfile.language === 1){
        localStorage.setItem('lang','en')
      } else if(response.data.userProfile.language === 2){
        localStorage.setItem('lang','por')
      } else if(response.data.userProfile.language === 3) {
        localStorage.setItem('lang','es')
      }
      this.reloadProfile();

      // this.child.listTeamsClubs();
      // this.child.liveCompetitionList();
      // this.child.upcomingGamesList();
      // this.child.leaguesList();
      // this.router.navigate(["/"]);
  
      
    });
  } 
  reloadProfile(){
    this.commonService._getProfile().subscribe((response) => {
      this.dataService.profile(response.data);
      this.router.navigate(["/"]);
      this.dataService.trendingCompetionApicalls("true");
    });
  }
  // loginsocialApicalls()
  // {
  //     this.commonService._getTrendingCompetions().subscribe((response) => {
  //       console.log('api call for social login',response);
  //     });
  // }
 
}
