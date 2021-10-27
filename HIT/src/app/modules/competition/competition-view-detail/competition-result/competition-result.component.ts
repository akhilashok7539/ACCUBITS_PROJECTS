import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/service/common.service';
@Component({
  selector: 'app-competition-result',
  templateUrl: './competition-result.component.html',
  styleUrls: ['./competition-result.component.scss']
})
export class CompetitionResultComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
  userNameDarkened=false;
  current_joined_index;
  best_player_dropdown = false;
  @Input() competition_detail;
  showLeaderBoardPlayers = false;
  selectedUserName = 'All Players'
  selectedUserId='';
  date_index = 0;
  match_count = 0;
  tiles = [1,2,3,4,5,6,7,8,8,8,8,8,8];
  data = [1,2,3,4,5];
  playersList = [];
  slideConfigDate = {
    slidesToShow: 7,
    slidesToScroll: 1,
    "infinite": false,
    responsive: [
      {
        breakpoint: 1900,
        settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1700,
        settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1600,
        settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1400,
        settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1300,
        settings: { slidesToShow: 4, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 950,
        settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: true }
      },
      { breakpoint: 600, settings: { slidesToShow: 2 } }
    ]
  };
  error='';
  constructor(private service:ApiService,
    private route:ActivatedRoute,
    public commonService: CommonService,
    private toastr:ToastrService) { }
  try = [1,2,3,4,5];
  isactive_index; 
  loading = false;
  best_player_index;
  rounds=[];
  results;
  result_round =null;
  predictions=[];
  envurl='';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const found = this.route.snapshot.paramMap.get("round")
      if(found !== null ){
          this.result_round = found;
      } 
    });
    this.envurl = environment.api_url; 
    if(this.competition_detail.type === 2){
      this.getRounds();
    }else{
      this.predictionsResult();
    }
   }
  onSelect(index){
    this.isactive_index = index;
  }
  onSelectBestplayer(index){
    this.best_player_index = index;
    this.best_player_dropdown = true;
  }
  onCancel(){
    this.best_player_dropdown = false;

  }
  getNotJoinedRounds(round?){
    var url = ''
    if(this.competition_detail.type === 2){
      url = `/v1/competition/round/match/list?referenceId=`+this.competition_detail.guid+`&round=`+round;
     }else{
      url = `/v1/competition/match/list/`+this.competition_detail.guid;
     }
    this.service.httpGet(url).subscribe((response) => {
     if(this.competition_detail.type === 1) {
      this.match_count = response.data.matches.length
    }else {
      this.match_count = response.data.matchList.length
    }
   });
  }
  closePlayerDropdown(event){
    if (event) {
      if (this.best_player_dropdown) {
        this.best_player_dropdown = false;
      }
    }
  }
  slickInit(e) {}
  breakpoint(e) {}
 
  afterChange(e) {}

  beforeChange(e) {}
  getRounds(){
    this.loading = true;
    this.rounds = [];
    this.service.httpGet(`/v1/competition/rounds/`+this.competition_detail.guid).subscribe((response) => {
       this.competition_detail.joinedRounds.forEach(el => {
        response.data.rounds.forEach(els =>{
           if(el === els.name){
             this.rounds.push(els)
           }
         }) 
       });
       const length = this.competition_detail.joinedRounds.length;
          this.date_index = 0;
          if(this.result_round !== null){
            for(let i=0 ; i < this.rounds.length; i++ ){
              if(this.rounds[i].name.toString() === this.result_round.toString()){
                const found = i;
                this.date_index = found;
              }
            }
              
            }
       this.predictionsResult(this.rounds[this.date_index].name);
       this.getNotJoinedRounds(this.rounds[this.date_index].name)
       setTimeout(() => {
        this.myDiv.nativeElement.click();
        }, 200);
        this.loading = false;
   });
  }
  onSelectDate(item,i){
    this.selectedUserId = '';
    this.selectedUserName = 'All Players';
    this.date_index = i;
    this.rounds.map((x)=>{
      if(x.name==item.name){
        x.active = true;
        this.predictionsResult(item.name); 
        this.getNotJoinedRounds(item.name) 
      }else{
        x.active = false;
      }
     })
  }
  selectPlayerResult(i){
    if(i!='all'){
      this.selectedUserId = i.user.guid;
      this.selectedUserName = i.user.username
    }else{
      this.selectedUserId = '';
      this.selectedUserName = 'All Players'
    }
    if (this.competition_detail.type === 1) {
      this.predictionsResult();
    }else{
      this.predictionsResult(this.rounds[this.date_index].name);
    }
    this.showLeaderBoardPlayers = false;
  }

  predictionsResult(round?){
    let apiParams;
    if(this.competition_detail.type === 1) {
      this.getNotJoinedRounds();
    }
    this.loading = true;
    if (this.competition_detail.type === 2) {
      apiParams = {
        round: round,
      };
    }
    if(this.selectedUserId){
      apiParams = Object.assign({ userId: this.selectedUserId }, apiParams);
    }
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/competition/predictions/results/' + this.competition_detail.guid + '?' + params).subscribe((response) => {
      this.error ='';
       this.results = response.data;
       this.playersList = response.data.players;
       var duplicate_dates = this.results.matchDates;
       var dates = []
       duplicate_dates.forEach(el => {
        dates.push(moment(el).format('YYYY-MM-DD'))
      });
        dates = [...new Set(dates)];
      var array1 =[];
      var array2 = [];

       dates.map((x)=>{
        this.results['predictions'].map((y)=>{
          var temp  = y.match.matchTime;
          y.date = temp;
         

          if(moment(x).format('YYYY-MM-DD') === moment(y.date).format('YYYY-MM-DD')){
            if(array1.length==0){
              array1 = [y];
            }else{
              array1.push(y);
            }
          } 

          y.overlayOpen = false;
        })
        if(array2.length==0){
          array2 = [{newdate:x,array:array1}];
          array1=[];
        }else{
          var newrow = {newdate:x,array:array1};
          array2.push(newrow);
          array1=[];
        }
       })
       this.predictions = array2;  
       this.loading = false;
    },
    (error) => { 
      this.loading = false;
      this.error = error.error.message;
      this.toastr.error(error.error.message);
    });
  }
  squash(arr){ 
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
      var temp  = arr[i].split("T");
      arr[i] = temp[0];
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
  }
}

