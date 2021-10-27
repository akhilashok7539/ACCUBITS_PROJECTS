import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { environment } from '../../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/service/common.service';
import * as moment from 'moment';
@Component({
  selector: 'app-competition-betting-leaderboard-view',
  templateUrl: './competition-betting-leaderboard-view.component.html',
  styleUrls: ['./competition-betting-leaderboard-view.component.scss']
})
export class CompetitionBettingLeaderboardViewComponent implements OnInit, AfterViewInit {
  @Input() competition_detail;
  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;
  competition_status;
  
  tiles = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8]
  data = [1, 2, 3, 4, 5];
  user_id = localStorage.getItem('userName_id');
  date_index;
  over_all;
  loading = false;
  next_slide = 0;
  p = 1;
  total = 0;
  limit = 10;
  selected_index;
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
  rounds = [];
  leaderBoardList = [];
  rankonelist = [];
  rankonelistlength;
  envurl = '';
  error = '';
  public overall_width = {
    width: '100px'
  }
  pramsvalue;
  constructor(private service: ApiService,
    private toastr: ToastrService,
    private commonService: CommonService,
    private activaterouter:ActivatedRoute,
    private router: Router) {
      this.activaterouter.params.subscribe(params =>{
        console.log(params);
        this.pramsvalue = params.id;
      })
     }

  ngOnInit(): void {
    this.competition_status = localStorage.getItem("status_comp");  
    console.log("competion status",this.competition_status);
    if (window.screen.width < 500) {
      this.slideConfigDate['arrows'] = false;
    }
    this.envurl = environment.api_url;
    if (this.competition_detail.type === 2) {
      this.getRounds();
    } else {
      this.leaderBoard();
    }
   
    
  }
  ngAfterViewInit() {
    var width = this.myIdentifier.nativeElement.offsetWidth;
    var height = this.myIdentifier.nativeElement.offsetHeight;
  }
  slickInit(e) {
  }
  breakpoint(e) {

  }

  afterChange(e) {
    this.next_slide = e.currentSlide;

  }

  beforeChange(e) {

  }

  onSelectDate(item, i, evemt?) {
    this.p = 1;
    if (this.next_slide === i && this.competition_detail.isFullPlayer === 1) {
      this.date_index = 0;
      this.selected_index = item.name;
      this.rounds.map((x) => {
        if (x.name == this.over_all.name) {
          x.active = true;
          this.leaderBoard(this.over_all.name);
        } else {
          x.active = false;
        }
      })
    } else {
      this.date_index = i;
      this.selected_index = item.name;
      this.rounds.map((x) => {
        if (x.name == item.name) {
          x.active = true;
          this.leaderBoard(item.name);
        } else {
          x.active = false;
        }
      })
    }
    console.log('thisdqw qwd ', this.date_index)

  }
  getRounds() {
    this.rounds = [];
    this.service.httpGet(`/v1/competition/rounds/` + this.competition_detail.guid + '?isLeaderboard=1').subscribe((response) => {
      if (this.competition_detail.isFullPlayer === 1) {
        response.data.rounds.forEach(els => {
          this.rounds.push(els)
        })
        this.leaderBoard(this.rounds[0].name);
        this.selected_index = this.rounds[0].name;
        this.over_all = response.data.rounds[0];
        if (this.over_all.startDate > moment().format('YYYY-MM-DDThh:mm:ssZ')) {

        } else {
          this.over_all.endDate = moment().format('YYYY-MM-DDThh:mm:ssZ');
        }
        this.date_index = parseInt(this.competition_detail.upcomingRound);
        console.log('thisdqw qwd ', this.date_index)
      } else {
        this.competition_detail.joinedRounds.forEach(el => {
          response.data.rounds.forEach(els => {
            if (el === els.name) {
              this.rounds.push(els)
            }
          })
        });
        this.selected_index = this.rounds[this.rounds.length - 1].name;
        this.leaderBoard(this.rounds[this.rounds.length - 1].name);
        this.date_index = this.rounds.length - 1;
      }
    });
  }
  leaderBoard(round?) {
    this.leaderBoardList = [];
    var url = ''
    this.loading = true;
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    if (round === undefined) {
      round = this.selected_index;
    }
    if (this.competition_detail.type === 2) {
      url = `/v1/competition/predictions/leaderboard/` + this.competition_detail.guid + `?round=` + round + `&` + params;
    } else {
      url = `/v1/competition/predictions/leaderboard/` + this.competition_detail.guid + `?` + params;
    }
    this.service.httpGet(url).subscribe((response) => {
      this.total = response.data.totalCount;
      this.leaderBoardList = response.data.rows;
      this.rankonelist = this.leaderBoardList.filter(el => el.rank === 1)
      console.log(this.rankonelist);
      this.rankonelistlength = this.rankonelist.length;
      this.loading = false;
    },
      (error) => {
        this.toastr.error(error.error.message);
      });
  }
  getdatawidth(data) {
    this.overall_width.width = data + 'px';
    // console.log(data)
  }
  paginateBoard(e) {
    this.p = e;
    this.leaderBoard();
  }
  sendRequest(id, isFriend, i) {
    if (isFriend == 0) {
      var data = {
        userId: id
      }
      this.service.httpPost(`/v1/feed/friend/request/send`, data).subscribe((response) => {
        this.toastr.success(response.message);
        this.leaderBoardList[i].user.isRequested = 1;
      },
        (error) => {
          this.toastr.error(error.error.message);
        });
    }

  }
  sendRequests(i) {
    if (i === 1) {
      this.toastr.success('Request Already Send');
    } else {
      this.toastr.success('Already Friend');
    }
  }
  onViewProfile(data) {
    this.router.navigateByUrl('/feed/profile?user=' + data.user.guid)
  }
  getconversionvaluecheck(s,a)
  {
    return s * a;
  }
  getidCheck()
  {
    if(this.pramsvalue === '353dffdb-4a34-4016-aa8e-d465c5c1fcb4' || this.pramsvalue === '1bdd8247-3cee-40e9-b208-68eef735a450')
    {
      console.log("check here");
      return true;
    }
    else 
    {
      console.log("1 check here");

      return false;
    }
  }
  getcheckLessthancondtion(prizeAmount)
  {
  
    
    if(prizeAmount < 19)
    {
      return true;
    }
    else{
      return false;

    }
  }
}
