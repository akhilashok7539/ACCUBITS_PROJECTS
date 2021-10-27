import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creating-competitions',
  templateUrl: './creating-competitions.component.html',
  styleUrls: ['./creating-competitions.component.scss']
})
export class CreatingCompetitionsComponent implements OnInit {

  fixed=false;
  isWeb=true;
  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.app==1){
       this.isWeb = false;
      }
    })
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
