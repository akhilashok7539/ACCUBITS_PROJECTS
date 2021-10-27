import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router'; 
import { DataServiceService } from '../../shared/service/data-service.service';
import { CommonService } from '../../core/service/common.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  fixed = false;
  subscribeScroll:Subscription;
  constructor(public commonService: CommonService,
    private route: ActivatedRoute,
    private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.subscribeScroll=this.dataService.currentFeedScrollPosition.subscribe(data=>{
      if(data==0){
        const mainDiv = document.getElementById('section');
        mainDiv.scrollTop = 0; 
      }
    })
  }
  ngOnDestroy(): void {
    this.subscribeScroll.unsubscribe()
  }

  onScroll(event) {
    const mainDiv = document.getElementById('section');  
    this.dataService.feedScroll(mainDiv.scrollTop);
    this.dataService.feedScrollEv(event.target.offsetHeight,event.target.scrollTop,event.target.scrollHeight);
    if(mainDiv.scrollTop>10){
      this.fixed=true;
    }else{
      this.fixed=false;
    }
  }
}
