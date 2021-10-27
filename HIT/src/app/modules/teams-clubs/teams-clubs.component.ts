import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { CommonService } from '../../core/service/common.service';

@Component({
  selector: 'app-teams-clubs',
  templateUrl: './teams-clubs.component.html',
  styleUrls: ['./teams-clubs.component.scss']
})
@HostListener('window:scroll', ['$event']) 
export class TeamsClubsComponent implements OnInit {
  fixed = false;
  constructor(public commonService: CommonService,private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    // this.commonService.removeCompetitionData();
    this.route.queryParams.subscribe(params => {
      if(Object.keys(params).length!=0){
        this.loginWithParams(params)
      }
    });
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
    this.auth.storeTokens(data);
  }

}
