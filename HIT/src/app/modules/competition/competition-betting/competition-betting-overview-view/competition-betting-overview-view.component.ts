import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { environment } from '../../../../../environments/environment';
import { CountdownComponent } from "ngx-countdown";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
declare var $: any;

@Component({
  selector: 'app-competition-betting-overview-view',
  templateUrl: './competition-betting-overview-view.component.html',
  styleUrls: ['./competition-betting-overview-view.component.scss']
})
export class CompetitionBettingOverviewViewComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
  @ViewChild('slickModal') slickModal: CompetitionBettingOverviewViewComponent;
  @Input() competition_detail;
  @Input() enable_competition;
  @Output() disable_button = new EventEmitter();
  current_date;
  current_joined_index;
  current_match_date;
  counter;
  counterHour;
  count_round = 0;
  userNameDarkened = false;
  date_index = 0;
  best_player_dropdown = false;
  tiles = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8]
  data = [1];
  bettingClosesInMinutes;
  slideConfigDate = {
    slidesToShow: 7,
    slickGoTo: (10),
    slidesToScroll: 1,
    "infinite": false,
    responsive: [
      {
        breakpoint: 1900,
        settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: true }
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
  details: any;
  predictions = [];
  constructor(private service: ApiService,
    private toastr: ToastrService,
    private dataService: DataServiceService,
    private router: Router) {
  }
  try = [1, 2, 3, 4, 5];
  isactive_index;
  best_player_index;
  envurl = '';
  rounds = [];
  newCounter = 0;
  nmnmn = 1000;
  resendEnable = false;
  homePlayers = [];
  awayPlayers = [];
  selectHomePlayer = '';
  selectAwayPlayer = '';
  selectPlayer1 = '';
  selectPlayer2 = '';
  tab = 1;
  error = '';
  todayDate: any;
  current_round;
  preDate: any;
  selected_date;
  current_dates = new Date();
  ngOnInit(): void {
    console.log("competion array",this.competition_detail);
    
    if (window.screen.width < 500) {
      this.slideConfigDate['arrows'] = false;
    }
    this.dataService.currentbettingData.subscribe(data => {
      if (data !== null) {
        this.router.navigateByUrl('/competition/betting/' + this.competition_detail.guid, { skipLocationChange: true }).then(() => {
          this.router.navigate([CompetitionBettingOverviewViewComponent]);
        });
      }
    })
    const current_date = moment(new Date).format('YYYY-MM-DD');
    this.current_date = current_date;
    this.envurl = environment.api_url;
    if (this.competition_detail.type === 2) {
      this.getRounds();
    } else {
      this.predictionsList();
      this.current_joined_index = 0;
      this.date_index = 0;
    }
  }
  seconds;
  minutes;
  hours;
  getTimeRemaining(ts) {
    var olddate: any;
    olddate = new Date(ts);
    var subbed = new Date(olddate - 1 * 60 * 60 * 1000); // subtract 1 hours
    this.selected_date = moment(subbed).format('YYYY-MM-DD');
    const now = moment();
    const then = moment(subbed);
    const diff = then.diff(now);
    const dur = moment.duration(diff);

    let parts = [];
    let part: any;
    for (part of ['hours', 'minutes', 'seconds']) {
      const d = dur[part]();
      dur.subtract(moment.duration(d, part));
      parts.push(d);
    }
    this.seconds = parts[2];
    this.minutes = parts[1];
    this.hours = parts[0];
  }
  counterfunction() {
    this.nmnmn = this.nmnmn - 1
  }
  submitPrediction(hscore, ascore, multiple, homep, awayp, id, j, z) {
    var data = {
      referenceId: id,
      homeScore: hscore,
      awayScore: ascore
    };
    if (multiple == 1.5 || multiple == 2) {
      data['multiple'] = multiple;
    }
    if (homep) {
      data['homePlayer'] = homep;
      delete data['awayPlayer'];
    }
    if (awayp) {
      data['awayPlayer'] = awayp;
      delete data['homePlayer'];
    }
    this.service.httpPost(`/v1/competition/predict`, data).subscribe((response) => {
      this.toastr.success(response.message);
      this.predictions[j].array[z].status = 1;
      const found = this.details.predictions.filter(el => el.status === 1);
      this.details.count = found.length;
    },
      (error) => {
        //  this.toastr.error(error.error.message);
      });
  }
  handleEvent(event) {
    if (event.action === 'notify') {
      this.resendEnable = true
    }
  }
  onSelect(index) {
    this.isactive_index = index;
  }
  onSelectBestplayer(index) {
    this.best_player_index = index;
    // this.best_player_dropdown = true;
  }
  onCancel() {
    this.homePlayers = [];
    this.awayPlayers = [];
    this.selectHomePlayer = '';
    this.selectAwayPlayer = '';
  }
  closePlayerDropdown(event) {
    if (event) {
      if (this.best_player_dropdown) {
        this.best_player_dropdown = false;
      }
    }
  }
  editPrediction(data, j, z) {
    this.predictions[j].array[z].status = 0;
  }
  onSelectDate(item, i) {
    console.log(item,i);
    
    // this.date_index = i;
    this.date_index = item.name;

    this.current_match_date = item.startDate;
    const found = this.competition_detail.joinedRounds.find((el) => el === item.name);
    this.rounds.map((x) => {
      if (x.name == item.name) {
        x.active = true;
        if (found !== undefined) {
          this.predictionsList(item.name);
        } else {
          this.getNotJoinedRounds(item.name)
        }
      } else {
        x.active = false;
      }
    })
   console.log(this.rounds);
   
  }
  disbaleSubmitAll() {
    const found = [];
    let player_id;
    const final_submit_data = []
    this.predictions.forEach(el => {
      el.array.forEach(els => {
        found.push(els)
      });
    })
    found.forEach(el => {
      if (el.homeScore !== '' && el.awayScore !== '' && el.homeScore !== null && el.awayScore !== null && el.status === 0) {
        final_submit_data.push(el);
      }
    });
    if (final_submit_data.length > 0 && this.competition_detail.isPlayer !== 0) {
      return false;
    } else {
      return true;
    }
  }
  onSubmitall() {
    const found = [];
    let player_id;
    let player_ids;
    const final_submit_data = []
    this.predictions.forEach(el => {
      el.array.forEach(els => {
        found.push(els)
      });
    })
    found.forEach(el => {
      if (el.homeScore !== '' && el.awayScore !== '' && el.homeScore !== null && el.awayScore !== null && el.status === 0) {
        if (el.match.homeTeam.player_id !== '') {
          const data = {
            "referenceId": el.guid,
            "homeScore": el.homeScore,
            "awayScore": el.awayScore,
            "multiple": el.multiple,
            "homePlayer": el.match.homeTeam.player_id,
          }
          if (data.multiple === '1.0' || data.multiple === '') {
            delete data.multiple
          }
          final_submit_data.push(data);
        } else if (el.match.awayTeam.player_id !== '') {
          const data = {
            "referenceId": el.guid,
            "homeScore": el.homeScore,
            "awayScore": el.awayScore,
            "multiple": el.multiple,
            "awayPlayer": el.match.awayTeam.player_id
          }
          if (data.multiple === '1.0' || data.multiple === '') {
            delete data.multiple
          }
          final_submit_data.push(data);
        } else {
          const data = {
            "referenceId": el.guid,
            "homeScore": el.homeScore,
            "awayScore": el.awayScore,
            "multiple": el.multiple,
          }
          if (data.multiple === '1.0' || data.multiple === '') {
            delete data.multiple
          }
          final_submit_data.push(data);
        }
      }
    });
    const data = {
      'matchPredictions': final_submit_data
    }
    this.service.httpPost(`/v1/competition/predict/all`, data).subscribe((response) => {
      this.toastr.success(response.message);
      if (this.competition_detail.type === 2) {
        this.ngOnInit();
      } else {
        this.predictionsList();
        this.current_joined_index = 0;
        this.date_index = 0;
      }

    },
      (error) => {
        //  this.toastr.error(error.error.message);
      });
  }
  slickInit(e) { }
  breakpoint(e) { }

  afterChange(e) { }

  beforeChange(e) { }
  closeFilterDropdown(event) {
    if (event) {
      if (this.best_player_dropdown) {
        this.best_player_dropdown = false;
      }
    }
  }
  getRounds() {
    this.service.httpGet(`/v1/competition/rounds/` + this.competition_detail.guid).subscribe((response) => {
      this.rounds = response.data.rounds;
      console.log("Number of round",this.rounds);
      
      const current_date = moment(new Date).format('YYYY-MM-DD');
      this.current_date = current_date;
      const length = this.competition_detail.joinedRounds.length;
      // specific round for users round players
      if (this.competition_detail.isPlayer === 1 && this.competition_detail.isFullPlayer === 0) {
        this.date_index = this.competition_detail.joinedRounds[length - 1] - 1;
        this.predictionsList(this.rounds[this.date_index].name);
      }
       else if (this.competition_detail.isPlayer === 1 && this.competition_detail.isFullPlayer === 1) {
        // this.date_index = this.competition_detail.season.currentRound - 1;
        // this.date_index = this.competition_detail.season.currentRound.toString();
        this.date_index = this.competition_detail.upcomingRound.toString();
        console.log("date index",this.date_index);
        this.predictionsList(this.date_index);  
      }
       else {
        this.date_index = this.competition_detail.upcomingRound - 1;
        this.getNotJoinedRounds(this.rounds[this.date_index].name);
      }
      
      this.current_joined_index = this.date_index;
      console.log("current joinned index",this.current_joined_index);

      if (this.date_index <= this.rounds.length - 5) {
        this.count_round = this.date_index;
      } else {
        this.count_round = this.rounds.length - 5;
      }
    
      setTimeout(() => {
        this.myDiv.nativeElement.click();
      }, 200);
    });
  }
  getNotJoinedRounds(round) {
    this.service.httpGet(`/v1/competition/round/match/list?referenceId=` + this.competition_detail.guid + '&round=' + round).subscribe((response) => {
      const duplicate_dates = []
      this.details = response.data.matchList;
      this.counterHour = 0;
      this.counter = 0;
      this.details.totalPredictions = response.data.matchList.length;
      this.details.forEach(el => {
        duplicate_dates.push(el.matchTime)
        el.awayScore = '';
        el.homeScore = '';
        el.match = {
          awayTeam: el.awayTeam,
          homeTeam: el.homeTeam,
          status: 0,
          matchTime: el.matchTime
        }
      });
      var dates = []
      var array1 = [];
      var array2 = [];
      duplicate_dates.forEach(el => {
        dates.push(moment(el).format('YYYY-MM-DD'))
      });
      dates = [...new Set(dates)];
      dates.map((x) => {
        this.details.map((y) => {
          var temp = y.match.matchTime;
          y.date = temp;
          y.match.awayTeam.player_name = '';
          y.match.awayTeam.player_id = '';
          y.match.homeTeam.player_name = '';
          y.match.homeTeam.player_id = '';
          if (moment(x).format('YYYY-MM-DD') === moment(y.date).format('YYYY-MM-DD')) {
            if (array1.length == 0) {
              array1 = [y];
            } else {
              array1.push(y);
            }
          }
          y.overlayOpen = false;
          y.active = false;
        })
        if (array2.length == 0) {
          array2 = [{ newdate: x, array: array1 }];
          array1 = [];
        } else {
          var newrow = { newdate: x, array: array1 };
          array2.push(newrow);
          array1 = [];
        }
      })
      this.error = '';
      this.predictions = array2;
      var countDownDate = new Date(this.predictions[0].array[0].match.matchTime).getTime();
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      hours = days * 24;
      // this.predictions[0].array[0].active=true;
      if (moment(now).format('yyyy-MM-dd') == moment(this.predictions[0].newdate).format('yyyy-MM-dd')) {
        this.todayDate = '';
        this.newCounter = (seconds + (Math.abs(minutes) * 60) + (Math.abs(hours) * 3600)) - 60;
      } else {
        this.todayDate = this.predictions[0].newdate;
        this.newCounter = 0;
      }
      this.current_match_date = this.predictions[0].array[0].match.matchTime;
      //  this.setTimer(this.predictions[0].array[0].match.matchTime)
      const date = moment(this.predictions[0].array[0].match.matchTime).format('YYYY-MM-DD HH:mm:ss')
    });
  }
  setTimer(data) {
    var countDownDate = new Date(data).getTime() - 3600000;
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var d = moment.duration(distance, 'milliseconds');
    var hours = Math.floor(d.asMinutes());
    this.counter = distance / 1000;
    this.counterHour = hours;
  }
  disableinputbasedonDate(data,index) {
    // console.log(index);
    if(index.array.length === 1)
    {
     
      
      if(index.array[0].isPredictionAllowed === 0)
      {
        return true
      } 
      else{
        return false
      }  
    }
    else
    {
     
      for(let i=0;i<index.array.length;i++)
      {
        if(index.array[i].isPredictionAllowed === 0)
        {
          return true
        } 
        else{
          return false
        } 
      }
    }
   
    // console.log(data);
    // console.log(moment(data.match.matchTime).subtract(3600, 'seconds').format('YYYY-MM-DD HH:mm:ss'));
    // if (moment(data.match.matchTime).subtract(this.bettingClosesInMinutes, 'seconds').format('YYYY-MM-DD HH:mm:ss') >= moment(new Date).format('YYYY-MM-DD HH:mm:ss') && this.competition_detail.isPlayer === 1) {
    //   this.disable_button.emit(false)
     
    //   if(index.array[0].isPredictionAllowed === 0)
    //   {
    //     return true
    //   } 
    //   else{
    //     return false
    //   }     
    // // return false
    // } else {
    //   this.disable_button.emit(true)
    //   return true
    // }
  }
  match_cout = 0;
  selectPont(point, j, z) {
    const data = [];
    this.predictions.forEach(el => {
      el.array.forEach(els => {
        data.push(els)
      });
    })
    const found = data.find((el) => el.multiple === point);
    this.match_cout = data.length;
    if (found === undefined) {
      this.predictions[j].array[z].multiple = point;
    } else {
      if (this.predictions[j].array[z].multiple === point) {
        this.predictions[j].array[z].multiple = ''
      }
    }

  }
  predictionsList(round?) {
    this.current_round = round;
    console.log("current round",round);
    
    var url = ''
    if (this.competition_detail.type === 2) {
      url = `/v1/competition/predictions/list/` + this.competition_detail.guid + `?round=` + round;
    } else {
      url = `/v1/competition/predictions/list/` + this.competition_detail.guid;
    }
    this.service.httpGet(url).subscribe((response) => {
      this.details = response.data;
      console.log(this.details);
      this.counter = this.details.bettingTimer;
      this.counterHour = Math.floor(this.details.bettingTimer / 60);;
      this.bettingClosesInMinutes = response.data.bettingClosesInMinutes* 60;
      console.log(this.bettingClosesInMinutes);
      
      var duplicate_dates = this.details.matchDates;
      var dates = []
      var array1 = [];
      var array2 = [];
      duplicate_dates.forEach(el => {
        dates.push(moment(el).format('YYYY-MM-DD'))
      });
      dates = [...new Set(dates)];
      dates.map((x) => {
        this.details.predictions.map((y) => {
          var temp = y.match.matchTime;
          y.date = temp;
          if (y.awayPlayerInfo === null) {
            y.match.awayTeam.player_name = '';
            y.match.awayTeam.player_id = '';
          } else {
            y.match.awayTeam.player_name = y.awayPlayerInfo.name;
            y.match.awayTeam.player_id = y.awayPlayerInfo.id;
          }
          if (y.homePlayerInfo === null) {
            y.match.homeTeam.player_name = '';
            y.match.homeTeam.player_id = '';
          } else {
            y.match.homeTeam.player_name = y.homePlayerInfo.name;
            y.match.homeTeam.player_id = y.homePlayerInfo.id;
          }

          // if(x==y.date){  
          if (moment(x).format('YYYY-MM-DD') === moment(y.date).format('YYYY-MM-DD')) {
            if (array1.length == 0) {
              array1 = [y];
            } else {
              array1.push(y);
            }
          }
          y.overlayOpen = false;
          y.active = false;
        })
        if (array2.length == 0) {
          array2 = [{ newdate: x, array: array1 }];
          array1 = [];
        } else {
          var newrow = { newdate: x, array: array1 };
          array2.push(newrow);
          array1 = [];
        }
      })
      this.error = '';
      this.predictions = array2;
      console.log("predtions array",this.predictions);
      
      this.current_match_date = this.predictions[0].array[0].match.matchTime;
      //  this.setTimer(this.predictions[0].array[0].match.matchTime)
      const date = moment(this.predictions[0].array[0].match.matchTime).format('YYYY-MM-DD HH:mm:ss')
      var countDownDate = new Date(this.predictions[0].array[0].match.matchTime).getTime();
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      hours = days * 24;
      // this.predictions[0].array[0].active=true;
      if (moment(now).format('yyyy-MM-dd') == moment(this.predictions[0].newdate).format('yyyy-MM-dd')) {
        this.todayDate = '';
        this.newCounter = (seconds + (Math.abs(minutes) * 60) + (Math.abs(hours) * 3600)) - 60;
      } else {
        this.todayDate = this.predictions[0].newdate;
        this.newCounter = 0;
      }
      for(let i=0;i<this.details.predictions.length;i++)
      {
       if(this.details.predictions[i].isPredictionAllowed === 1)
       {
        this.current_match_date = this.details.predictions[i].date;
        console.log("curent date ",this.current_match_date );
        
        break;
       }
       else
       {

       }

      }
    },
      (error) => {
        this.error = error.error.message;
        this.toastr.error(error.error.message);
      });
  }
  squash(arr) {
    var tmp = [];
    for (var i = 0; i < arr.length; i++) {
      var temp = arr[i].split("T");
      arr[i] = temp[0];
      if (tmp.indexOf(arr[i]) == -1) {
        tmp.push(arr[i]);
      }
    }
    return tmp;
  }
  getPlayersList(id, string, homePlayer?, awayPlayer?): void {
    this.service.httpGet(`/v1/team/players/` + id).subscribe((response) => {
      var players = response.data.players;
      if (string == 'home') {
        this.homePlayers = players
      } else if (string == 'away') {
        this.awayPlayers = players
      }
      if (homePlayer) {
        this.homePlayers.map((x) => {
          if (x.name == homePlayer) {
            this.selectHomePlayer = x.id;
          }
        })
      }
      if (awayPlayer) {
        this.awayPlayers.map((x) => {
          if (x.name == awayPlayer) {
            this.selectAwayPlayer = x.id;
          }
        })
      }
    });
  }
  getAllPlayers(homeTeamId, awayTeamId, homePlayer, awayPlayer) {
    this.getPlayersList(homeTeamId, 'home', homePlayer, awayPlayer);
    this.getPlayersList(awayTeamId, 'away', homePlayer, awayPlayer);
  }
  popupOpen(j, z, homeTeamId, awayTeamId, homePlayer, awayPlayer) {
    this.tab = 1;
    this.closePopup();
    this.onCancel();
    this.predictions[j].array[z].overlayOpen = true;
    this.predictions[j].array[z].active = true;
    this.getAllPlayers(homeTeamId, awayTeamId, homePlayer, awayPlayer);
  }
  onFocusEvent(j, z) {
    this.predictions[j].array[z].active = true;
  }
  onBlurMethod(j, z) {
    this.predictions[j].array[z].active = false;
  }
  closePopup() {
    this.predictions.map((x) => {
      x.array.map((y) => {
        if (y.overlayOpen == true) {
          y.overlayOpen = !y.overlayOpen;
          y.active = !y.active;
        };
      })
    })
  }
  selectPlayers(str, id, name, z, j) {
    if (str == '1') {
      this.selectHomePlayer = id
      this.selectPlayer1 = name;
      this.predictions[j].array[z].match.homeTeam.player_name = name;
      this.predictions[j].array[z].match.homeTeam.player_id = id;
      this.selectAwayPlayer = '';
      this.selectPlayer2 = '';
      this.predictions[j].array[z].match.awayTeam.player_name = '';
      this.predictions[j].array[z].match.awayTeam.player_id = '';

    } else if (str == '2') {
      this.selectAwayPlayer = id;
      this.selectPlayer2 = name;
      this.predictions[j].array[z].match.awayTeam.player_name = name;
      this.predictions[j].array[z].match.awayTeam.player_id = id;
      this.selectHomePlayer = '';
      this.selectPlayer1 = '';
      this.predictions[j].array[z].match.homeTeam.player_name = '';
      this.predictions[j].array[z].match.homeTeam.player_id = '';
    }
    this.closePopup();
  }
  removeSelectPlayer(z, j) {
    if (this.predictions[j].array[z].status === 0) {
      this.predictions[j].array[z].match.awayTeam.player_name = '';
      this.predictions[j].array[z].match.awayTeam.player_id = '';
      this.predictions[j].array[z].match.homeTeam.player_name = '';
      this.predictions[j].array[z].match.homeTeam.player_id = '';
    }

  }
  onSelectCompetition(data) {
    localStorage.setItem('go_to_home_from_overview', 'true')
    if (data.match.id === undefined) {
      window.open('/competition/overview/match/' + data.id, "_blank");
    } else {
      window.open('/competition/overview/match/' + data.match.id, "_blank");
    }
  }
  updateMultiple(j, z, multiple) {
    this.predictions[j].array[z].multiple = multiple;
  }
  notifyTimer(event) {
    if (event.action === 'notify') {
      this.ngOnInit();
    }
  }
  getdatasss(data)
  {
    console.log(data.isPredictionAllowed);
    if(data.isPredictionAllowed === 0)
    {
      return true
    }
    else
    {
      return false
    }
  }
}
