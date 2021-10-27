import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-competition-club-view',
  templateUrl: './competition-club-view.component.html',
  styleUrls: ['./competition-club-view.component.scss']
})
export class CompetitionClubViewComponent implements OnInit { 
  @Input() gu_id;
  @Output() competition_club_view = new EventEmitter();
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1, 
    responsive: [
      { breakpoint: 1900, settings: { slidesToShow: 3, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 1400, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 1300, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 950, settings: { slidesToShow: 2, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } },
      { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } },
    ]};
  constructor(
    private service:ApiService,
    private router:Router
  ) { }
  hover_club = true;
  club_details;
  envurl = '';
  ngOnInit(): void {
    this.ViewClubDetail();
    this.envurl = environment.api_url;
    if (window.screen.width < 500) { 
      this.slideConfig['arrows'] = true;
    }
  }
  ViewClubDetail() {
    this.service.httpGet('/v1/competition/club/list/' + this.gu_id).subscribe((response) => {
      this.club_details = response.data.rows;
      this.competition_club_view.emit(response.data.totalCount)
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
