import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { ApiService } from '../../../core/service/api.service';
import { CommonService } from '../../../core/service/common.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  subscribeProfile : Subscription;
  subscribeTab : Subscription;
  userProfile;
  allFriendsData;
  requestedList;
  blockedList;
  suggestionList;
  allsuggetionList;
  totalCountSuggetList=0;
  selectedTab = 1;
  p = 1;
  total = 0;
  limit = 10;
  ownProfile = true;
  visitProfileId:'';
  constructor(private dataService: DataServiceService,
    private service: ApiService,
    public router: Router,
    private route: ActivatedRoute,
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(Object.keys(params).length!=0){
        this.visitProfileId = params.user;
        this.ownProfile = false;
      }else{
        this.visitProfileId = '';
        this.ownProfile = true;
      }
    });
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if(data){
        this.userProfile = data;
        this.getAllFriends();
      }
    });
    this.getFollowRequests();
    this.getBlockedList();
    this.getallfirendssuggetionList();
  }
  ngAfterViewInit(): void {
    this.subscribeTab = this.dataService.friendsTab.subscribe(data=>{
      if(data==4){
        this.selectedTab=2;
      }else{
        this.selectedTab=1;
      }
    }) 
  }
  ngOnDestroy(){
    this.subscribeProfile.unsubscribe();
    this.subscribeTab.unsubscribe();
  }
  getAllFriends() {
    let id='';
    // console.log("inown",this.ownProfile)
    if (this.ownProfile==true) {
      id=this.userProfile.guid
    } else {
      id=this.visitProfileId
    }
    this.service.httpGet('/v1/feed/friend/all?userId=' + id).subscribe((response) => {
      this.allFriendsData = response.data;
    });
  } 
  getallfirendssuggetionList()
  {
    let page = 1;
    this.service.httpGet(`/v1/feed/friend/suggestions?page=` + page + `&size=100`).subscribe((response) => {
      this.allsuggetionList = response.data['rows'];
      this.totalCountSuggetList = response.data['totalCount'];
      // this.currentPageClub = response.data.currentPage;
    });
  }
  seeAllAction(){
    let id='';
    if (this.ownProfile) {
      id=this.userProfile.guid
    } else {
      id=this.visitProfileId
    }
    this.service.httpGet('/v1/feed/friend/all?userId=' + id + '&size=' + this.allFriendsData.totalCount).subscribe((response) => {
      this.allFriendsData = response.data;
    });
  }
  getFollowRequests(){
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/feed/friend/requests?' + params).subscribe((response) => {
      this.requestedList = response.data;
    });
  }
  requestActionCall(){
    this.getFollowRequests();
    this.getAllFriends();
    this.getBlockedList();
    this.getallfirendssuggetionList();
  }

  getBlockedList(){
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/feed/friend/blocked?' + params).subscribe((response) => {
      this.blockedList = response.data;
    });
  }
  changeTab(i) {
    this.selectedTab = i;
  }

}
