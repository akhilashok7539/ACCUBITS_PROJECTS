import { Component, Input, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({ 
  selector: 'app-competition-matches-view',
  templateUrl: './competition-matches-view.component.html',
  styleUrls: ['./competition-matches-view.component.scss']
})
export class CompetitionMatchesViewComponent implements OnInit {
  @Output() competition_matches_view = new EventEmitter();
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
  @Input() gu_id;
  @Input() competition_detail;
  date_index = 0;
  count_tile = 0;
  tiles = [];
  match_details = [];
  resendEnable = false;
  p = 1;
  total = 0;
  limit = 3;
  todayDate:any;
  counter;
  counterHour;
  counterMinutes;
  view_page = 'list';
  slideConfigDate = {
    slidesToShow: 7,
    slidesToScroll: 1,
    "infinite": false,
    responsive: [
      {
        breakpoint: 1900,
        settings: { slidesToShow: 7, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1700,
        settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1600,
        settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1400,
        settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: true }
      },
      {
        breakpoint: 1300,
        settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: true }
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
  envurl = '';
  constructor(private router: Router, private service: ApiService) {}

  ngOnInit(): void {
    this.ViewMatchDetail();
    this.envurl = environment.api_url;
    if (window.screen.width < 500) { 
      this.slideConfigDate['arrows'] = false;
    }

    console.log("counter"+this.counterHour);
    
  
  }
  onDateIndexSelect(data) {
    this.date_index = data;
  }
  onViewPage(data) {
    this.view_page = data;
  }
  onOverview(id) {
    this.router.navigateByUrl('/competition/overview/match/' + id);
  }
  date_range;
  ViewMatchDetail() {
    const date = [];
    this.service
      .httpGet('/v1/competition/match/list/' + this.gu_id)
      .subscribe(response => {
        console.log(response);
        this.counterMinutes =response.data['bettingClosesInMinutes'];
        this.date_range = response.data;
        this.date_range.matches.forEach(el => {
          el.date = moment(el.matchTime).format('YYYY-MM-DD');
          el.current_date = moment(el.matchTime).format('YYYY-MM-DDThh:mm:ss');
        });
        if (this.competition_detail.type === 1) {
          this.date_range.titles.forEach(el => {
            date.push(moment(el).format('YYYY-MM-DD'))
        });
        this.date_range.titles = [...new Set(date)];
          this.date_range.titles.forEach(el => {
            const date_detail = {
              title: moment(el).format('YYYY-MM-DD'),
              detail: []
            }
            this.tiles.push(date_detail);
          });
          // tslint:disable-next-line:variable-name
          this.tiles.forEach(el => {
            el.detail = this.date_range.matches.filter(
              x => x.date.toString() === el.title.toString()
            );
          })
          this.setTimer(this.date_range.matches[0].matchTime)
          this.competition_matches_view.emit(this.date_range.matches.length)
        } else {
          const round = this.date_range.titles;
          round.forEach(el => {
            const round_range = this.date_range.matches.filter(
              x => x.round.toString() == el.toString()
            ); 
            let data;
            if(round_range .length > 0){
              const length = round_range.length;
               data = {
                name: el,
                start_date: round_range[0].current_date,
                end_date: round_range[length - 1].current_date,
                status : 0
              };
            } else {
              data = {
                name: el,
                start_date: 'Will be Updated',
                end_date: 'Will be Updated',
                status : 1
              };
            }
           
            this.tiles.push(data);
          });
          setTimeout(() => { 
            this.myDiv.nativeElement.click();
            }, 200);
            const length = this.competition_detail.joinedRounds.length;
              this.date_index = this.competition_detail.upcomingRound -1;
              if(this.date_index <= this.tiles.length - 5){
                this.count_tile = this.date_index ;
              } else {
                this.count_tile = this.tiles.length - 5;
              }
          this.match_details = this.date_range.matches.filter(
            x => x.round == this.tiles[this.date_index].name
          );
          this.setTimer(this.match_details[0].matchTime);
          this.competition_matches_view.emit(this.date_range.matches.length)
        }
      });
  }
 
  getMatchdatewise(obj) {
    if (obj) {
      return Object.values(obj || {})[1];
    }
  }
  onSelectDate(obj, index) {
    this.date_index = index;
    if (obj) {
      this.p = 1;
      this.total = 0;
      this.limit = 3;
  
        this.match_details = this.date_range.matches.filter(
          x => x.round.toString() == obj.name.toString()
        );
    }
    this.setTimer(this.match_details[0].matchTime);
  }
  onLineUp(id) {
    this.router.navigate( ['/competition/overview/match/' + id, {typw: "2"}]);

  }
  onSelectCompetition(data){
    window.open('/team/' + data.id, "_blank");

   }
  setTimer(data){
    // 1 hour minus
    // 
    var milliseconds = this.counterMinutes * 60000;
    var countDownDate = new Date(data).getTime() - milliseconds; 
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var d = moment.duration(distance, 'milliseconds');
    var hours = Math.floor(d.asMinutes());
    this.counter = distance / 1000; 
    this.counterHour = hours;
  }
  onSelectDateForChampionship(obj) {
    if (obj) {
      return Object.values(obj || {})[1];
    }
  }
  MatchDateRangeForChampionship(obj) {
    let check_date_range: any;
    check_date_range = Object.values(obj || {})[1];
    return check_date_range.length - 1;
  }
  slickInit(e) {
    
  }
  breakpoint(e) {
    
  }
  afterChange(e) {
    
  }
  beforeChange(e) {
    
  }
  paginateGames(e) {
    this.p = e;
  }
  GetMatchHours(startDate) {
    var currentDate = moment(new Date());
    var lastDate = moment(startDate);
    var diffMin = lastDate.diff(currentDate, 'minutes');
    return diffMin * 60;
  }
  handleEvent(event) {
    if (event.action === 'notify') {
      this.resendEnable = true;
    }
  }
  getlang()
  {
    return localStorage.getItem('lang')

  }
}
