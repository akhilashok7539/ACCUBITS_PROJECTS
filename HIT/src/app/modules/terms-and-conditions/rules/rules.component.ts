import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

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