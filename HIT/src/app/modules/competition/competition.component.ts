import { Component, OnInit,HostListener } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { CommonService } from '../../core/service/common.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
@HostListener('window:scroll', ['$event']) 
export class CompetitionComponent implements OnInit {
  fixed = false;
  check_status:any
  constructor(public commonService: CommonService,private route: ActivatedRoute) { }

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
  CheckStatusForCompeitionLanding(){
    const data = localStorage.getItem('competition_landing')
    if(data === '1'){
      this.check_status = true;
    }else {
      this.check_status = false;
    }

    return this.check_status;
  }
}

