import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-competition-current-match',
  templateUrl: './competition-current-match.component.html',
  styleUrls: ['./competition-current-match.component.scss']
})
export class CompetitionCurrentMatchComponent implements OnInit {
  @Input() match_overview_detail;
  constructor() { }
  envurl = '';
  ngOnInit(): void {
    this.envurl = environment.api_url;
  }
  formatDate(date) {
    date = new Date(date)
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()}, ${months[date.getMonth()]} ${date.getFullYear()}`
  }
  formatWeek(date) {
    date = new Date(date)
    var weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weeks[date.getDay()];
  }
  onSelectCompetition(data){
    window.open('/team/' + data.id, "_blank");
   } 
   getlang(){
    // console.log(localStorage.getItem('lang'));
    return localStorage.getItem('lang')
  }
}
