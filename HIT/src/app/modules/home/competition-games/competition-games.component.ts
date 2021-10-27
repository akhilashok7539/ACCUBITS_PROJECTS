import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { CountdownComponent } from "ngx-countdown";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { Subscription } from 'rxjs';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-competition-games',
  templateUrl: './competition-games.component.html',
  styleUrls: ['./competition-games.component.scss']
})
export class CompetitionGamesComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
  @ViewChild("countdown") counter: CountdownComponent;
  betting_popup = false;
  popular = 'Popular Teams'
  competition_detail;
  type = 'All';
  envurl = '';
  slides = [
    {id:'1034567',day:'2',match:'05',status:true},
    {id:'1204567',day:'4',match:'10',status:false},
    {id:'1230567',day:'6',match:'15',status:true},
    {id:'1234067',day:'8',match:'20',status:false},
    {id:'1234507',day:'10',match:'25',status:false},
    {id:'1234500',day:'12',match:'29',status:false}
  ];
  is_login = localStorage.getItem('userName');
    slideConfig ;
    slideConfig2;
    slideConfig4;
    liveList=[];
    hitofficallist=[];
    randImages = ['random1.jpg', 
      'random2.jpg', 
      'random3.jpg', 
      'random4.jpg', 
      'random5.jpg', 
      'random6.jpg',
      'random7.jpg',
      'random8.jpg',
    ];
    liveCount = 0;
    hitofficialcount = 0;
    upcomingList=[];
    resendEnable=false;
    countTime: number = 0;
    statusList=[];
    teamsClubs=[];
    livePageNo=1;
    clubPageNo=1;
    typeDrop=false; 
    oneTime=false;
    champian=false;
    liveFilter=false;
    leagueList=[];
    leagueCount:any;
    leaguePage = 1;
    popTeams = false;
    trendingapicalls: Subscription;

  constructor(private service:ApiService, 
    private dataService: DataServiceService,
    private router: Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getConfig();
    this.envurl = environment.api_url;
    this.countTime = 120;
    this.listTeamsClubs();
    this.liveCompetitionList();
    this.hitofficialcompetions();
    this.upcomingGamesList();
    this.leaguesList();
    if(localStorage.getItem("JWT_TOKEN") !== null){
          this.getCompetitionStatus();
    }
    this.trendingapicalls  = this.dataService.trendingcompetionapicalls.subscribe(
      data =>{
          console.log("data service works" ,data);
          this.liveCompetitionList();
          this.hitofficialcompetions();
      }
    )
  }
  gettypevalue()
  {
    if(localStorage.getItem('lang') === 'en')
    {
      return this.type = 'All';
    }
    if(localStorage.getItem('lang') === 'por')
    {
      return this.type = 'Todas ';
    }
  }
  getConfig(){
    if (window.screen.width < 500) { 
     this.slideConfig = {
        "slidesToShow": 4, 
        "slidesToScroll": 1,
        "infinite": true,
        "speed": 300, 
        "centerMode": true,
        "variableWidth": true,
        responsive: [
          { breakpoint: 1300, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
          { breakpoint: 950, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
          { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } },
          { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } }, 
        ]};
        this.slideConfig2 = {
          "slidesToShow": 5, 
          "slidesToScroll": 1,
          "arrows": false,
          autoplay: true,
          "speed": 300,
         "centerMode": true,
        "variableWidth": true,
          responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 1600, settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 950, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } }, 
          ]};
          this.slideConfig4 =  {
            "slidesToShow": 4, 
            "slidesToScroll": 1,
            // "arrows": false,
            autoplay: true,
            "speed": 300,
            "centerMode": true,
           "variableWidth": true,
            responsive: [
              { breakpoint: 1300, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
              { breakpoint: 950, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
              { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } },
              { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } }, 
            ]};
    }
     else {
      this.slideConfig = {
        "slidesToShow": 4, 
        "slidesToScroll": 1,
        "infinite": true,
        responsive: [
          { breakpoint: 1300, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
          { breakpoint: 950, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
          { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
          { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } }, 
        ]};
        this.slideConfig2 = {
          "slidesToShow": 5, 
          "slidesToScroll": 1,
          "arrows": false,
          autoplay: true,
          responsive: [
            { breakpoint: 1800, settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 1600, settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 1300, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 950, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
            { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } }, 
          ]};
          this.slideConfig4  = {
            "slidesToShow": 4, 
           "slidesToScroll": 1,
            "infinite": true,
            responsive: [
              { breakpoint: 1300, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
              { breakpoint: 950, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
              { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
              { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } }, 
            ]};
    }

  }
  slickInit(e) {
  }
  breakpoint(e) {
  }
  
  afterChange(e) {
  }
  
  beforeChange(e) {
  }
  listTeamsClubs(type?){
    this.popTeams = false;
    var url='';
    if(type){
      this.popular = type.name;
      url = `/v1/match/view/upcoming?pageLimit=10&pageNo=1&leagueId=`+type.id
    }else{
      this.popular = 'Popular Teams';
      url = `/v1/match/view/upcoming?pageLimit=10&pageNo=1`
    }
    this.service.httpGet(url).subscribe((response) => {
       var teamsClubs=response.data.rows;
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
      // this.myDiv.nativeElement.click();
    },
    (error) => {

      this.toastr.error(error.error.message);
    });
 } 
  getCompetitionStatus(){
    this.service.httpGet(`/v1/competition/predictions/stats`).subscribe((response) => {
      this.statusList = response.data.competitionStats;
      
    });
  }
  liveCompetitionList(type?,str?){ 
    console.log("apicalls",type,str);
    
    if(type === 1) {
      this.type = 'One time';
    } else if( type === 2) {
      this.type = 'Championship';
    } else if( type === 0) {
      this.type = 'All'
    }
    this.typeDrop=false;
    var url = '';
    if(type){
     
      url=`/v1/competition/trending/list?pageLimit=12&pageNo=`+this.livePageNo+`&competitionType=`+type;
    }else{
      url = `/v1/competition/trending/list?pageLimit=12&pageNo=`+this.livePageNo;
    }
    this.service.httpGet(url).subscribe((response) => {
      var liveList = response.data['rows'];
      this.liveCount = response.data['totalCount'];
      liveList.map((x)=>{
        if(x.name){
          x.head = x.name.split("@");
        }
        x.counter = x.bettingTimer;   
        x.counterHour = Math.floor(x.bettingTimer / 60);
        x.prize = x.entryCostInCoin * (x.competitionPlayers.length);
        const dateArray = x.matchDates.map((item)=>{
          return moment(item).format('DD-MM-YYYY');
        });
        const unique = dateArray.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
        }) 
        x.numberOfDays = unique; 
        x.randomImage = this.randImages[Math.floor(Math.random() * this.randImages.length)];
      })
      this.liveList = liveList;
      if(str=='next'){
        this.liveList.concat(liveList);
      }
      console.log("tendting competion list",this.liveList)
      
    },
    (error) => {
      this.toastr.error(error.error.message);
    });
  }
  hitofficialcompetions()
  {
    let  url=`/v1/competition/trending/list?isHitOfficial=1&pageNo=`+this.livePageNo;
    this.service.httpGet(url).subscribe((response) => {
      var hitofficial = response.data['rows'];
      this.hitofficialcount = response.data['totalCount'];
      hitofficial.map((x)=>{
        if(x.name){
          x.head = x.name.split("@");
        }
        x.counter = x.bettingTimer;   
        x.counterHour = Math.floor(x.bettingTimer / 60);
        x.prize = x.entryCostInCoin * (x.competitionPlayers.length);
        const dateArray = x.matchDates.map((item)=>{
          return moment(item).format('DD-MM-YYYY');
        });
        const unique = dateArray.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
        }) 
        x.numberOfDays = unique; 
        x.randomImage = this.randImages[Math.floor(Math.random() * this.randImages.length)];
      })
      this.hitofficallist = hitofficial;
      // if(str=='next'){
      //   this.liveList.concat(liveList);
      // }
      // console.log(this.liveList)
      
    },
    (error) => {
      this.toastr.error(error.error.message);
    });
  }
  upcomingGamesList(){
    // this.service.httpGet(`/v1/league/games?competitionType=1`).subscribe((response) => {
    //   this.upcomingList = response.data;
    // })
  }
  handleEvent(event) {
    if (event.action === 'notify') {
      this.resendEnable = true
    }
  }
  onSelectCompetition(data){
    localStorage.setItem('go_to_home','true')
    this.router.navigateByUrl('/competition/details/' + data.guid)
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
      }
     
    }else{
      this.leaguePage = 1;
    }
  });
}

onClose(){
  this.betting_popup = false;
}
onJoinCompetition(data) {
  this.competition_detail = data;
  localStorage.setItem('go_to_home_page','true')
  this.betting_popup = true;
} 
onAlreadyJoinCompetition(data){
  this.dataService.showBettingTab(2);
  this.router.navigateByUrl('/competition/betting/' + data.guid)
}
closeDropdown(event): void {
  if (event) {
    if (this.typeDrop) {
      this.typeDrop = false;
    } 
  }
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
 onBettingScreen(data) {
  this.router.navigateByUrl('/competition/betting/' + data.competitionGuid)
 }
 goToCompetitionHistory(){
    this.router.navigate(['/competition/landing']);
    this.dataService.showFriends(6);
 }
 goToAllCompetition(){
    this.router.navigate(['/competition/landing'],{ queryParams: { list: 'trending' } });
 }
 notifyTimer(event,i){
  if(event.action === 'notify'){
    this.liveList.splice(i, 1);
  }
 }
 onSelecttype(){
  window.scrollTo({top: 230, behavior: 'smooth' });
 
  this.liveFilter = false
  if(this.typeDrop === false){
    this.typeDrop = true;
  }else {
    this.typeDrop = false;
  }
}
trendingapicallforsocaillogin()
{
  console.log("call makes here");
  
 let url = `/v1/competition/trending/list?pageLimit=12&pageNo=`+this.livePageNo;
  this.service.httpGet(url).subscribe((response) => {
    var liveList = response.data['rows'];
    this.liveCount = response.data['totalCount'];
    liveList.map((x)=>{
      if(x.name){
        x.head = x.name.split("@");
      }
      x.counter = x.bettingTimer;   
      x.counterHour = Math.floor(x.bettingTimer / 60);
      x.prize = x.entryCostInCoin * (x.competitionPlayers.length);
      const dateArray = x.matchDates.map((item)=>{
        return moment(item).format('DD-MM-YYYY');
      });
      const unique = dateArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      }) 
      x.numberOfDays = unique; 
      x.randomImage = this.randImages[Math.floor(Math.random() * this.randImages.length)];
    })
    this.liveList = liveList;
   
    console.log("call makes here tendting competion list",this.liveList)
    
  },
  (error) => {
    this.toastr.error(error.error.message);
  });
}
ngAfterViewInit() {
  this.trendingapicallforsocaillogin();
}
getcompetionId(id)
{
  if(id === '926736617' || id === '736186492')
  {
    return true;
  }
  else
  {
    return false;
  }
}
getcheckvaluelessthan(value)
{
  if(value<19)
  {
    return true;
  }
  else
  {
    return false;
  }
}

}
   