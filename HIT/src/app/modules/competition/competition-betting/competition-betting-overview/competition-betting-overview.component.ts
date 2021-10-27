import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { ApiService } from '../../../../core/service/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competition-betting-overview',
  templateUrl: './competition-betting-overview.component.html',
  styleUrls: ['./competition-betting-overview.component.scss']
})
export class CompetitionBettingOverviewComponent implements OnInit {
  @Input() competition_detail;
  @Input() disable_button;
  betting_popup = false;
  shareFromCompetition;
  subscribeSharedCompetition: Subscription;
  title;
  shareUrl = '';
  @Output() scrollDown = new EventEmitter();
  @Output() competition = new EventEmitter();
  info = {
    completedMatches: 0,
    entryCostInUSD: 0,
    joinedDate: "",
    resultsGenerated: 0,
    totalMatches: 0,
    totalPoints: 0,
    totalPrizeInUSD: 0
  };
  constructor(private service: ApiService,
    private dataService: DataServiceService,
    private _location: Location,
    private router: Router) { }

  ngOnInit(): void {

    this.getInfo();
    this.setShareUrl();
    if (localStorage.getItem('go_to_home') === 'true') {
      this.title = 'Home'
    } else if (localStorage.getItem('go_to_feed') === 'true') {
      this.title = 'Feed'
    } else if (localStorage.getItem('go_to_tab') === 'true') {
      if (localStorage.getItem("lang") === 'en') {
        this.title = 'Competition'
      }
      if (localStorage.getItem("lang") === 'por') {
        this.title = 'Ligas';
      }
    } else {
      this.title = 'Home'
    }
    this.subscribeSharedCompetition = this.dataService.selectedCompetitionToShare.subscribe(data => {
      if (data) {
        if (data.compId) {
          this.shareFromCompetition = data;
        }
      }
    })
  }
  getlangForTitle()
  {
    if (localStorage.getItem('go_to_home') === 'true') {
      this.title = 'Home'
    } else if (localStorage.getItem('go_to_feed') === 'true') {
      this.title = 'Feed'
    } else if (localStorage.getItem('go_to_tab') === 'true') {
      if (localStorage.getItem("lang") === 'en') {
        this.title = 'Competition'
      }
      if (localStorage.getItem("lang") === 'por') {
        this.title = 'Ligas';
      }
    } else {
      this.title = 'Home'
    }
    return this.title;
  }
  getInfo() {
    this.service.httpGet(`/v1/competition/predictions/info/` + this.competition_detail.guid).subscribe((response) => {
      this.info = response.data;
    });
  }
  setShareUrl() {
    const currentUlrl = window.location.href;
    this.shareUrl = currentUlrl.replace('betting', "details");
  }
  scrollToElement() {
    this.scrollDown.emit('player');
  }
  onNavigate() {
    this.betting_popup = true;
  }
  onClose() {
    this.betting_popup = false;
  }
  oncompetition(data) {
    this.competition.emit();
  }
  onView() {
    localStorage.setItem('competition_view_active_index', '1');
    localStorage.setItem('competition_bet_active_index', '1');
    this._location.back();
    if (localStorage.getItem('go_to_home') === 'true') {
      localStorage.setItem('go_to_home', 'false')
      // this.router.navigateByUrl('/')
    } else if (localStorage.getItem('go_to_feed') === 'true') {
      localStorage.setItem('go_to_feed', 'false')
      // this.router.navigateByUrl('/feed')
    } else if (localStorage.getItem('go_to_tab') === 'true') {
      localStorage.setItem('go_to_tab', 'false')
      this.dataService.showFriends(this.shareFromCompetition.compTab);
      // this.router.navigateByUrl('/competition/landing')
      this.dataService.toShareCompetition(null, null)
    } else {
      // this.router.navigateByUrl('/')
    }
  }
  getconversionvaluecheck(a,b)
  {
    return a*b;
  }
  getlessthanOrEqual(a)
  {
    let value = a;
    if(value < 19)
    {
      return true;
    }
    else{
      return false;
    }
  }
  getcheckFucntionid(id)
  {
    if(id === '926736617' || id === '736186492')
    {
      return true;
    }
    else{
      return false;
    }
  }
}
