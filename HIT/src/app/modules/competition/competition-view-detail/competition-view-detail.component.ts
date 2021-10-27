import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/service/common.service';
@HostListener('window:scroll', ['$event']) 
@Component({
  selector: 'app-competition-view-detail',
  templateUrl: './competition-view-detail.component.html',
  styleUrls: ['./competition-view-detail.component.scss']
})
export class CompetitionViewDetailComponent implements OnInit {

  fixed = false;
  constructor(public commonService: CommonService,private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  onScroll(event) {
    const mainDiv = document.getElementById('section');  
    if(mainDiv.scrollTop>55){
      this.fixed=true;
    }else{
      this.fixed=false;
    }
  }
}



