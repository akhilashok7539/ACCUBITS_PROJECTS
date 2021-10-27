import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-landing',
  templateUrl: './competition-landing.component.html',
  styleUrls: ['./competition-landing.component.scss']
})
export class CompetitionLandingComponent implements OnInit {
  fixed=false;
  constructor() { }

  ngOnInit(): void {
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
