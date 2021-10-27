import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-betting',
  templateUrl: './competition-betting.component.html',
  styleUrls: ['./competition-betting.component.scss']
})
export class CompetitionBettingComponent implements OnInit {
  fixed=false;
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('competition_landing','0')
  }
  onScroll(event) {
    const mainDiv = document.getElementById('section');  
    if(mainDiv.scrollTop>10){
      this.fixed=true;
    }else{
      this.fixed=false;
    }
  } 

}
