import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-competition-betting-layout',
  templateUrl: './competition-betting-layout.component.html',
  styleUrls: ['./competition-betting-layout.component.scss']
})
export class CompetitionBettingLayoutComponent implements OnInit {
  isactive = 'player';
  competition_detail;
  disable_button;
  competition_days;
  enable_competition = false;
  gu_id;
  loading = false;
  subscribeTab: Subscription;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataServiceService,
  ) {
    this.gu_id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    localStorage.setItem('competition_landing', '0')
    const active_index = localStorage.getItem('competition_bet_active_index');
    if (active_index === '1') {
      this.isactive = 'player';
    } else if (active_index === '2') {
      this.isactive = 'Clubs';
    } else if (active_index === '3') {
      this.isactive = 'Matches';
    } else if (active_index === '4') {
      this.isactive = 'result';
    }

    // this.subscribeTab=this.dataService.BettingTab.subscribe(data=>{
    //   if(data==2){
    //     this.isactive='player';
    //   }
    //   if(data==3){
    //     this.isactive='Matches';
    //   }
    //   if(data==4){
    //     this.isactive='result';
    //   }
    // })
    this.ViewCompetitionDetail();

  }
  onClick(data) {
    this.isactive = data;
    if (data === 'player') {
      localStorage.setItem('competition_bet_active_index', '1')
    } else if (data === 'Clubs') {
      localStorage.setItem('competition_bet_active_index', '2')
    } else if (data === 'Matches') {
      localStorage.setItem('competition_bet_active_index', '3')
    } else if (data === 'result') {
      localStorage.setItem('competition_bet_active_index', '4')
    }
  }
  ViewCompetitionDetail() {
    this.loading = true;
    this.service.httpGet('/v1/competition/' + this.gu_id).subscribe((response) => {
      this.competition_detail = response.data;
      localStorage.setItem('gu_id', this.gu_id)
      localStorage.setItem('status_comp',this.competition_detail.status)
      this.loading = false;
    });
  }
  scrollDown(event) {
    this.isactive = event;
    setTimeout(() => {
      window.scrollTo(0, 600);
    }, 1000);
  }
  Disable_Button(data) {
    this.disable_button = data;
  }
  oncompetition($event) {
    this.loading = true;
    this.service.httpGet('/v1/competition/' + this.gu_id).subscribe((response) => {
      this.competition_detail = response.data;
      this.dataService.bettingDatas();
      localStorage.setItem('gu_id', this.gu_id)
      this.enable_competition = true;
      this.loading = false;
    });
  }
}
