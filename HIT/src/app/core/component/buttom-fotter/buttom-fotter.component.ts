import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { ApiService } from '../../service/api.service';
import { AuthService } from '../../service/auth.service';
import { CommonService } from '../../service/common.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-buttom-fotter',
  templateUrl: './buttom-fotter.component.html',
  styleUrls: ['./buttom-fotter.component.scss']
})
export class ButtomFotterComponent implements OnInit {
  loggedIn = false;
  isactive = '';
  subscribeProfile: Subscription;
  profile: any;
  userName: any;
  avatar: any;
  constructor(public router: Router, 
    public auth:AuthService, 
    private titleService: Title,
    public commonService: CommonService, 
    private activatedroute:ActivatedRoute,
    private dataService: DataServiceService,
    private service:ApiService) { }

  ngOnInit(): void {
   
  //   filter.call( 
  //     this.router.events, 
  //     (event:Event) => event instanceof NavigationEnd
  //  ).subscribe(x => console.log('cwecwec',x));
    this.checkIfData();
    this.dataService.headername.subscribe((res)=>{
      if(res) {
        this.isactive = res;
      }
    })
  }

  checkIfData() {
    if (localStorage.getItem("JWT_TOKEN") !== null) {
      this.loggedIn = true; 
      this.commonService._getProfile().subscribe((response) => {
        localStorage.setItem('userName', response.data.username);
        localStorage.setItem('userName_id', response.data.guid);
        this.dataService.profile(response.data);
        this.profile = response.data;
        this.userName = localStorage.userName;
        this.avatar = this.userName.substring(0,2);
      });
    }
  }
   setDocTitle(title: string) {
    this.titleService.setTitle('Hit-' + title);
 }
 addCompetition() {
  this.router.navigate(['/choose-competition']);
}
onClick(data){
  // this.isactive = data; 
  localStorage.setItem('competition_active_index','1'),
  localStorage.setItem('competition_bet_active_index','1')
  localStorage.setItem('competition_view_active_index','1')
  this.dataService.sendHeadername(data);
}
}
