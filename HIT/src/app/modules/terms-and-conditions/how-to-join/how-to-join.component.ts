import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-how-to-join',
  templateUrl: './how-to-join.component.html',
  styleUrls: ['./how-to-join.component.scss']
})
export class HowToJoinComponent implements OnInit {
  isWeb=true;

  fixed=false;
  type="oneTime"
  constructor(public route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params?.mode==2){
        this.type = 'championship'
      }else{
        this.type = 'oneTime'
      }
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
  switchMode(data){
    this.type=data;
  }

}
