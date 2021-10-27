import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-competition-match-overview-card',
  templateUrl: './competition-match-overview-card.component.html',
  styleUrls: ['./competition-match-overview-card.component.scss']
})
export class CompetitionMatchOverviewCardComponent implements OnInit {
  @Input() match_overview_detail;
  envurl = '';
  constructor() { }

  ngOnInit(): void {
    this.envurl = environment.api_url;
  }

}
