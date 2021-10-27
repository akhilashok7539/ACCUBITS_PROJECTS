import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/service/common.service';
import * as moment from 'moment';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-match-leaderboard',
  templateUrl: './admin-match-leaderboard.component.html',
  styleUrls: ['./admin-match-leaderboard.component.scss']
})
export class AdminMatchLeaderboardComponent implements OnInit {
    @Input() competition_detail;
    @ViewChild('myIdentifier')
    myIdentifier: ElementRef;
    tiles = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8]
    data = [1, 2, 3, 4, 5];
    user_id = localStorage.getItem('userName_id');
    date_index;
    over_all;
    loading = false;
    loggedIn = false;
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
    envurl = '';
    error = '';
    public overall_width = {
      width:'100px'
    }
    constructor(private service: ApiService,
      private toastr: ToastrService,
      private commonService: CommonService,
      private router: Router) { }
  
    ngOnInit(): void {
      if (localStorage.getItem("JWT_TOKEN") !== null) {
        this.loggedIn = true; 
      }
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
    getadminleaderboard() {
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
          this.date_index = 0;
        } else {
            response.data.rounds.forEach(els => {
                this.rounds.push(els)
            })
            this.date_index = 0;
          this.selected_index = this.rounds[0].name;
          this.leaderBoard(this.rounds[0].name);
          this.date_index = 0;
        }
      });
    }

    ngAfterViewInit() {
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
          this.date_index = 0;
        } else {
            response.data.rounds.forEach(els => {
                this.rounds.push(els)
            })
            this.date_index = 0;
          this.selected_index = this.rounds[0].name;
          this.leaderBoard(this.rounds[0].name);
          this.date_index = 0;
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
      if(round === undefined) {
        round = this.selected_index;
      }
      if(this.competition_detail.type === 2){
        url = `/v1/admin/competition/leaderboard?referenceId=`+this.competition_detail.guid+`&round=`+round +`&`+ params;
      }else{
        url = `/v1/admin/competition/leaderboard?referenceId=`+this.competition_detail.guid+`&`+ params;
      }
      this.service.httpGet(url).subscribe((response) => {
        this.total = response.data.totalCount;
        this.leaderBoardList = response.data.rows;
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
      if(!this.loggedIn){
        this.router.navigate(['/user']);
        return;
      }
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
      if(this.loggedIn){
        this.router.navigateByUrl('/feed/profile?user=' + data.user.guid)
      }else{
        this.router.navigate(['/user']);
      }
    }
  }
  