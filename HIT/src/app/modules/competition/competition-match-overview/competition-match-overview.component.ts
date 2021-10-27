import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-competition-match-overview',
  templateUrl: './competition-match-overview.component.html',
  styleUrls: ['./competition-match-overview.component.scss']
})
@HostListener('window:scroll', ['$event']) 
export class CompetitionMatchOverviewComponent implements OnInit {
  fixed = false;
  @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
      // see András Szepesházi's comment below
    }
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
