import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { CommonService } from '../../../core/service/common.service';
import { ApiService } from '../../../core/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { userInfo } from 'os';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('target') targetElement: any;
  cover = false;
  profile = false;
  subscribeProfile: Subscription;
  subscribeTab: Subscription;
  subscribeScroll: Subscription;
  subscribeEvent: Subscription;
  subscribeFromProfile: Subscription;
  bannerHeight = 0;
  userProfile;
  selectedTab = 1;
  currentScroll = 0;
  fromProfileView = 0;
  fixedProfile = false;
  ownProfile = true;
  profileTimeLineData = [];
  clubs = [];
  envurl = '';
  totalCountClub = 0;
  totalSuggestionCount=0;
  currentPageClub = 1;
  currentFriendSuggestion=1;
  requests = [];
  clubMore = true;
  suggestionMore = true;
  requestMore = true;
  is_login = localStorage.getItem('userName');
  currentPageRequest = 1;
  totalCountRequest = 0;
  feedPage = 1;
  feedTotalPage = 0;
  userIdParams;
  loggedInUserId;
  friendsSuggetionList:any=[];
  constructor(private dataService: DataServiceService,
    private service: ApiService,
    public commonService: CommonService,
    public router: Router,
    private _location: Location,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.envurl = environment.api_url;
    const profileParent = document.getElementById('profile_out');
    this.dataService.feedScroll(0);
    this.dataService.currentFeedScrollPosition.subscribe(data => {
      this.currentScroll = data;
      if (this.currentScroll > this.bannerHeight + 30) {
        this.fixedProfile = true;
      } else {
        this.fixedProfile = false;
      }
    })
    this.subscribeTab = this.dataService.friendsTab.subscribe(data => {
      console.log(data)
      if (data == 2 || data == 4) {
        this.selectedTab = 3;
      }
      if (data == 8) {
        this.selectedTab = 4;
      }
      if (data == 10) {
        this.selectedTab = 4;
      }

    })
    this.subscribeEvent = this.dataService.currentFeedScrollEvent.subscribe(data => {
      if (data) {
        if (data.offHeight + data.scrollTop >= data.scrollHeight - 80) {
          // this.listMoreFeeds();
        }
      }
    })
    this.listFriendRequestsfeed(1);
    this.listClubs(1);
    this.listFriendsSuggetionList(1);
    this.route.queryParams.subscribe(params => {
      console.log("USER DETAILS PROFILE", params.user);
      this.loggedInUserId = localStorage.getItem("user_id");
      // if(this.loggedInUserId === params.user)
      // {
      //   this.ownProfile = true;
      //  console.log("logged here",this.ownProfile);

      // }
      // else
      // {
      //   this.ownProfile = false;
      //   console.log("logged here",this.ownProfile);

      // }
      if (params.user) {

        const userId = params.user;
        this.userIdParams = params.user;
        // this.ownProfile = false;
        if (this.loggedInUserId === params.user) {
          this.ownProfile = true;
          console.log("logged here", this.ownProfile);

        }
        else {
          this.ownProfile = false;
          console.log("logged here", this.ownProfile);

        }

        this.getUser(userId);
        this.selectedTab = 1;
        if (params.view) {
          this.fromProfileView = params?.view
        }
      } else {
        this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
          if (data) {
            this.userProfile = data;
            this.ownProfile = true;
            this.getUserTimeline();
          }
        });
      }
      if (params.code) {
        this.addInstagramAccount(params.code)
      }
    });

  }
  loadMoreData() {
    console.log("clicked");

    this.listMoreFeeds();

  }
  ngAfterViewInit(): void {
    this.bannerHeight = this.targetElement.nativeElement.offsetHeight;
  }
  ngOnDestroy() {
    if (this.subscribeProfile) {
      this.subscribeProfile.unsubscribe();
    };
    if (this.subscribeFromProfile) {
      this.subscribeFromProfile.unsubscribe();
      this.dataService.toProfilePage(null, null);
    };
  }
  addInstagramAccount(id) {
    var data = {
      code: id
    }
    this.service.httpPost(`/v1/user/instagram/callback`, data).subscribe((response) => {
      this.getProfile();
      this.router.navigate(['/feed/profile']);
    });
  }
  getUser(id) {
    this.service.httpGet('/v1/user/profile?userId=' + id).subscribe((response) => {
      this.userProfile = response.data;
      this.feedPage = 1;
      this.profileTimeLineData = [];
      this.getUserTimeline();
    });
  }
  refreshFeed() {
    this.getUserTimeline();
  }
  getUserTimeline() {
    let apiParams = {
      page: this.feedPage,
      userId: this.userProfile.guid
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/feed/user/timeline?' + params).subscribe((response) => {
      this.feedTotalPage = response.data.totalPages;
      response.data.rows.map((x) => {
        if (x.feedType == 'post') {
          const dateArray = x.competition?.matchDates.map((item) => {
            return moment(item).format('DD-MM-YYYY');
          });
          const unique = dateArray.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
          })
          x.numberOfDays = unique;
        }
        x['isProfile'] = true;
        this.profileTimeLineData.push(x)
      })
    });
  }

  listMoreFeeds() {
    console.log(this.feedPage);
    console.log(this.feedTotalPage);

    if (this.feedPage < this.feedTotalPage) {
      this.feedPage = this.feedPage + 1;
      this.getUserTimeline();
    }
  }
  updateLike(data) {
    this.profileTimeLineData[data?.i].isLiked = data?.reaction;
    if (data?.reaction == 0) {
      this.profileTimeLineData[data?.i].totalLike = this.profileTimeLineData[data?.i].totalLike - 1;
    } else {
      this.profileTimeLineData[data?.i].totalLike = this.profileTimeLineData[data?.i].totalLike + 1;
    }
  }
  updateComment(data) {
    this.profileTimeLineData[data].totalComment = this.profileTimeLineData[data].totalComment + 1;
  }
  updateCommentCountIn(data) {
    this.profileTimeLineData[data.index].totalComment = data.count;
  }

  selectTab(i) {
    this.selectedTab = i;
  }
  getProfile() {
    this.commonService._getProfile().subscribe((response) => {
      this.dataService.profile(response.data);
    });
  }
  refreshProfile() {
    this.getProfile();
    this.profileTimeLineData = [];
    this.getUserTimeline();
    this.profile = false;
    this.cover = false;
  }

  listClubs(page) {
    this.service.httpGet(`/v1/feed/page/?page=` + page + `&size=10`).subscribe((response) => {
      this.clubs = response.data['rows'];
      this.totalCountClub = response.data.totalCount;
      if (this.totalCountClub <= this.currentPageClub * 10) {
        this.clubMore = false;
      } else {
        this.clubMore = true;
      }
      // this.currentPageClub = response.data.currentPage;
    });
  }
  listFriendsSuggetionList(page)
  {
    this.service.httpGet(`/v1/feed/friend/suggestions?page=` + page + `&size=10`).subscribe((response) => {
      this.friendsSuggetionList = response.data['rows'];
      this.totalSuggestionCount = response.data.totalCount;
      if (this.totalSuggestionCount <= this.currentFriendSuggestion * 10) {
        this.suggestionMore = false;
      } else {
        this.suggestionMore = true;
      }
      // this.currentPageClub = response.data.currentPage;
    });
  }
  nextListClubs() {
    if (this.totalCountClub >= this.currentPageClub * 10) {
      this.currentPageClub = this.currentPageClub + 1;
      this.listClubs(this.currentPageClub);
    }

  }
  nextListRequest() {
    if (this.totalCountRequest >= this.currentPageRequest * 5) {
      this.currentPageRequest = this.currentPageRequest + 1;
      this.listFriendRequestsfeed(this.currentPageRequest);
    }
  }
  submitRequest(id, number) {
    var data = {
      userId: id,
      status: number
    }
    this.service.httpPost('/v1/feed/friend/request/change', data).subscribe((response) => {
      this.toastr.success(response.message);
      this.listFriendRequestsfeed(this.currentPageClub);
    });
  }
  listFriendRequestsfeed(page) {
    this.service.httpGet(`/v1/feed/friend/requests?pageNo=` + page + `&pageLimit=5`).subscribe((response) => {
      this.requests = response.data['rows'];
      this.totalCountRequest = response.data['totalCount'];
      if (this.totalCountRequest <= this.currentPageRequest * 5) {
        this.requestMore = false;
      } else {
        this.requestMore = true;
      }
    });
  }
  goToCompetition() {
    if (this.ownProfile) {
      this.router.navigate(['/competition/landing']);
    } else {
      this.router.navigate(['/competition/landing/'], { queryParams: { user: this.userProfile.guid } });
    }

    this.dataService.showFriends(3);
  }
  goToJoined() {
    this.router.navigate(['/competition/landing']);
    this.dataService.showFriends(7);
  }
  goToHistory() {
    this.router.navigate(['/competition/landing']);
    this.dataService.showFriends(6);
  }
  onBack() {
    if (this.fromProfileView != 0) {
      this.dataService.showFriends(this.fromProfileView);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], { relativeTo: this.route });
    }
    this._location.back();
  }
  pageLikeUnlike(id, isLike) {
    var status = 0;
    if (!isLike) {
      status = 1;
    }
    var data = {
      teamId: id,
      status: status
    }
    this.service.httpPost('/v1/feed/page/like', data).subscribe((response) => {
      this.listClubs(this.currentPageClub);
    });
  }
  deletePost(e) {
    this.profileTimeLineData.splice(e, 1);
  }
  openCover() {
    this.cover = true;
  }
  openProfile() {
    this.profile = true;
  }
  openProfileMobile()
  {
    console.log("clicked");
    this.profile = true;
  }
  closeCoverDialouge(event) {
    if (event) {
      this.cover = false;
    }
  }
  closeProfileDialouge(event) {
    if (event) {
      this.profile = false;
    }
  }
  closeProfileDialougeMobile(event)
  {
    if (event) {
      this.profile = false;
    }
  }
  goToInstaPage() {
    window.open(this.userProfile.instagramProfileUrl, "_blank");
  }
  addFriendRequest() {
    let req = {
      "userId": this.userIdParams
    }
    this.service.httpPost(`/v1/feed/friend/request/send`, req).subscribe((response) => {
      this.toastr.success(response.message);
      this.getUser(this.userIdParams)
    })
  }
  sentFriendReuest(item)
  {
    let req = {
      "userId": item.guid
    }
    this.service.httpPost(`/v1/feed/friend/request/send`, req).subscribe((response) => {
      this.toastr.success(response.message);
      // this.getUser(this.userIdParams)
    })
  }
  goToresponsiblegaming()
  {
    if(localStorage.getItem("lang")=== 'en')
    {
      window.open("https://blog.hit-game.com/responsible-gaming/","_blank")

    }
    if(localStorage.getItem("lang")=== 'por')
    {
      window.open("https://blog.hit-game.com/responsible-gaming/portuguese/","_blank")

    }
    if(localStorage.getItem("lang")=== 'es')
    {
      window.open("https://blog.hit-game.com/responsible-gaming/spanish/","_blank")

    }
  }
}
