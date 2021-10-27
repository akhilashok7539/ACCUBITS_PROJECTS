import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-competition-match-played-card',
  templateUrl: './competition-match-played-card.component.html',
  styleUrls: ['./competition-match-played-card.component.scss']
})
export class CompetitionMatchPlayedCardComponent implements OnInit {
  @Input() view_match_played;
  constructor() { }
  envurl = '';
  ngOnInit(): void {
    this.envurl = environment.api_url;
  }
  formatDate(date) {
    date = new Date(date)
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
  }
}
