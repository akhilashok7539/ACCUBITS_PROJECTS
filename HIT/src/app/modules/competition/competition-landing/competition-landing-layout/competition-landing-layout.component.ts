import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../.././../shared/service/data-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-competition-landing-layout',
  templateUrl: './competition-landing-layout.component.html',
  styleUrls: ['./competition-landing-layout.component.scss']
})
export class CompetitionLandingLayoutComponent implements OnInit {
  subscribeTab : Subscription;
  isactive = 'all';
  ownProfile = true;
  userId:'';
  loggedIn = false;
  constructor(private dataService: DataServiceService,
    public router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    if (localStorage.getItem("JWT_TOKEN") !== null) {
      this.loggedIn = true; 
    }
    localStorage.setItem('navigate_to_competetion', null)
    localStorage.setItem('competition_landing','1');
    const active_index = localStorage.getItem('competition_active_index');
        if(active_index === '1'){
          this.isactive = 'all';
        } else if(active_index === '2'){
          this.isactive = 'my';
        } else if(active_index === '3'){
          this.isactive = 'join';
        } else if(active_index === '4'){
          this.isactive = 'history';
        }
    this.route.queryParams.subscribe(params => { 
      if(params.user){
        this.ownProfile = false;
        this.userId = params.user;
        this.isactive = 'my';
      }
    });
    this.subscribeTab=this.dataService.friendsTab.subscribe(data=>{
      if(data==3){
        this.isactive='my';
      }
      if(data==6){
        this.isactive='history';
      }
      if(data==7){
        this.isactive='join';
      }
    })
  }
  onClick(data){
    this.isactive = data;
    if(data === 'all'){
      localStorage.setItem('competition_active_index','1')
    } else if(data === 'my'){
      localStorage.setItem('competition_active_index','2')
    } else if(data === 'join'){
      localStorage.setItem('competition_active_index','3')
    } else if(data === 'history'){
      localStorage.setItem('competition_active_index','4')
    }
  }
  ngOnDestroy(): void {
    // this.dataService.showFriends(1);
    this.subscribeTab.unsubscribe();
  }
  toSelectedTimeline(){
    this.router.navigate(['/feed/profile'],{ queryParams: { user: this.userId } });
  }
}
