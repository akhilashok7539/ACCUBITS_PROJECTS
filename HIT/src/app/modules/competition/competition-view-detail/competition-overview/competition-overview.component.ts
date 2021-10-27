import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-competition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.scss']
})
export class CompetitionOverviewComponent implements OnInit {
  @Input() competition_detail;
  @Input() competition_days;
  betting_popup = false;
  shareFromCompetition;
  socialMediaList=[];
  shareUrl = '';
  subscribeSharedCompetition: Subscription;
  title;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private dataService: DataServiceService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.popup !== undefined) {
        console.log('came:::::::::::')
        this.onNavigate();
      }
    }); 
  }

  ngOnInit(): void {
    this.shareUrl = window.location.href;
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
    this.isMobile();
  }

  isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.socialMediaList = ['facebook','messenger','whatsapp','twitter']
    }
    else {
      this.socialMediaList = ['facebook','messenger','whatsapp','twitter']
    }
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
  check() {
    if (this.competition_detail !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  disableinputbasedonDate(data) {
    if (moment(data).subtract(3600, 'seconds').format('YYYY-MM-DD HH:mm:ss') >= moment(new Date).format('YYYY-MM-DD HH:mm:ss')) {
      return false
    } else {
      return true
    }
  }
  onNavigate() {
    this.betting_popup = true;
    // this.router.navigateByUrl('/competition/betting')
  }
  onExistingplayerNAvigate() {
    this.router.navigateByUrl('/competition/betting/' + this.competition_detail.guid)
  }
  onClose() {
    this.betting_popup = false;
  }
  onClick() {
    localStorage.setItem('competition_view_active_index', '1');
    localStorage.setItem('competition_bet_active_index', '1');
    this._location.back();
    this._location.onUrlChange((url: string, state: unknown) => {
      console.log("Location changes to " + url);
      console.log("error changes to " + state);
    }),
      (ex => {
        console.log("Error occured postate event")
        console.log(ex);
      })
    this._location.subscribe(
      ((value: PopStateEvent) => {
        console.log("locaton OnNext")
        console.log(value);
      }),
      (ex => {
        console.log("Error occured postate event")
        console.log(ex);
      })
    )
    if (localStorage.getItem('go_to_home') === 'true') {
      localStorage.setItem('go_to_home', 'false')
      // this.router.navigateByUrl('/')
    } else if (localStorage.getItem('go_to_feed') === 'true') {
      localStorage.setItem('go_to_feed', 'false')
      // this.router.navigateByUrl('/feed')
    } else if (localStorage.getItem('go_to_tab') === 'true') {
      this.dataService.showFriends(this.shareFromCompetition.compTab);
      localStorage.setItem('go_to_tab', 'false')
      // this.router.navigateByUrl('/competition/landing')
      this.dataService.toShareCompetition(null, null)
    } else {
      // this.router.navigateByUrl('/')
    }
  }
  shareToFeed(item) {
    this.dataService.toShareCompetition(item.guid, 'details')
    this.router.navigateByUrl('/feed')
  }
  getlessthanOrEqual(a)
  {
    let value  = a;
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
    if(id === '926736617' || id === '736186492' || id === '110006247' || id === '104494585')
    {
      return true;
    }
    else{
      return false;
    }
  }
}
