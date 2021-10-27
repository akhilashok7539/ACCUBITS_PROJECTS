import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-competition-betting-club-view',
  templateUrl: './competition-betting-club-view.component.html',
  styleUrls: ['./competition-betting-club-view.component.scss']
})
export class CompetitionBettingClubViewComponent implements OnInit {
  @Input() competition_detail;
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    responsive: [
      { breakpoint: 1900, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 1300, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 950, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]};
  constructor(
    private service:ApiService,
    private router:Router
  ) { }
  hover_club = true;
  club_details = [];
  envurl='';
  ngOnInit(): void {
    if (window.screen.width < 500) { 
      this.slideConfig['arrows'] = true;
    }
    this.envurl = environment.api_url;
    this.ViewClubDetail();
  }
  ViewClubDetail() {
    this.service.httpGet('/v1/competition/club/list/' + this.competition_detail.guid).subscribe((response) => {
      this.club_details = response.data.rows;
    });
  }
  slickInit(e) {
  }
  breakpoint(e) {
  }

  afterChange(e) {
  }

  beforeChange(e) {
  }
  onSelectCompetition(data){
    window.open('/team/' + data.id, "_blank");

   }
}

