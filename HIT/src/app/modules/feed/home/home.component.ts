import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';
import { ApiService } from '../../../core/service/api.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { from, Subscription } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscribeProfile: Subscription;
  subscribeEvent: Subscription;
  subscribeSharedCompetition: Subscription;
  userProfile;
  timelineStage = 1;
  thirdSearch = false;
  thumbnailData;
  youtubeUrl = '';
  linkActive = false;
  requests = [];
  clubs = [];
  currentPageClub = 1;
  totalCountClub = 0;
  envurl = '';
  searchValue = '';
  competition = [];
  shareContent = '';
  shareId = '';
  selectedCompetition = {};
  clubMore = true;
  requestMore = true;
  currentPageRequest = 1;
  totalCountRequest = 0;
  userId = '';
  shareFromCompetition;
  timeLineData = [];
  suggestedPagesList;
  page = 1;
  totalPage = 0;
  feedPage = 1;
  feedTotalPage = 0;
  constructor(private service: ApiService,
    public commonService: CommonService,
    private router: Router,
    private toastr: ToastrService,
    private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.envurl = environment.api_url;
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if (data) {
        this.userProfile = data;
      }
    });
    this.subscribeEvent = this.dataService.currentFeedScrollEvent.subscribe(data => {
      if (data) {
        if (data.offHeight + data.scrollTop + 1 > data.scrollHeight) {
          // this.listMoreFeeds();
        }
      }
    })
    this.subscribeSharedCompetition = this.dataService.selectedCompetitionToShare.subscribe(data => {
      if (data?.compId) {
        this.shareFromCompetition = data;
        this.shareCompetition(data);
      }
    })
    this.userId = localStorage.getItem('userName_id');
    this.listFeeds();
    this.listFriendRequestsfeed(1);
    this.listClubs(1);
  }
  ngOnDestroy() {
    this.subscribeProfile.unsubscribe();
    this.subscribeEvent.unsubscribe();
    this.subscribeSharedCompetition.unsubscribe();
    this.dataService.toShareCompetition(null, null);
  }
  refreshFeed() {
    this.feedPage = 1;
    this.timeLineData = [];
    this.listFeeds();
    this.listClubs(1);
  }
  nextSection(id) {
    this.thirdSearch = false;
    this.searchValue = '';
    this.page = 1;
    this.competition = [];
    if (id == 1) {
      this.shareContent = '';
      this.timelineStage = 1;
      this.selectedCompetition = {};
      this.shareId = '';
      this.linkActive = false;
      if (this.shareFromCompetition?.compTab == '1' || this.shareFromCompetition?.compTab == '3' || this.shareFromCompetition?.compTab == '7') {
        this.dataService.showFriends(this.shareFromCompetition.compTab);
        this.router.navigate(['/competition/landing']);
        this.dataService.toShareCompetition(null, null)
      }
      if (this.shareFromCompetition?.compTab == 'details') {
        this.router.navigate(['/competition/details/' + this.shareFromCompetition.compId]);
        this.dataService.toShareCompetition(null, null)
      }
      if (this.shareFromCompetition?.compTab == 'overview') {
        const found = localStorage.getItem('match_id');
        this.router.navigate(['/competition/overview/match/' + found]);
        this.dataService.toShareCompetition(null, null)
      }
    }
    if (this.timelineStage == 4 || this.timelineStage == 5) {
      return
    }
    this.timelineStage = id;
  }
  onView() {
    this.router.navigate(['/feed/profile']);
  }
  loadMoreData() {
    this.listMoreFeeds();
  }
  listFeeds() {
    let apiParams = {
      page: this.feedPage,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet(`/v1/feed/user/feeds?` + params).subscribe((response) => {
      this.feedTotalPage = response.data.totalPages;
      if (response.data.rows.length != 0) {
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
          this.timeLineData.push(x)
        })
      }
    });
  }
  listMoreFeeds() {
    if (this.feedPage <= this.feedTotalPage) {
      setTimeout(() => {
        this.feedPage = this.feedPage + 1;
        this.listFeeds();
      }, 100);
    }
  }
  updateLike(data) {
    this.timeLineData[data?.i].isLiked = data?.reaction;
    if (data?.reaction == 0) {
      this.timeLineData[data?.i].totalLike = this.timeLineData[data?.i].totalLike - 1;
    } else {
      this.timeLineData[data?.i].totalLike = this.timeLineData[data?.i].totalLike + 1;
    }
  }
  updateComment(data) {
    this.timeLineData[data].totalComment = this.timeLineData[data].totalComment + 1;
  }
  updateCommentCountIn(data) {
    this.timeLineData[data.index].totalComment = data.count;
  }
  likedSuggestion(data) {
    this.timeLineData.splice(data, 1);
    this.listClubs(1);
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
  submitRequest(id, number) {
    var data = {
      userId: id,
      status: number
    }
    this.service.httpPost('/v1/feed/friend/request/change', data).subscribe((response) => {
      this.toastr.success(response.message);
      this.listFriendRequestsfeed(this.currentPageRequest);
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
  displayList() {
    this.thirdSearch = false;
    this.timelineStage = 3;
    this.competitionList();
    // if (!this.shareContent) {
    //   this.toastr.error('Please enter the content');
    // } else {
    //   this.timelineStage = 3;
    //   this.competitionList();
    // }
  }
  competitionList() {
    let apiParams = {
      page: this.page,
      search: this.searchValue,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet(`/v1/feed/competition?` + params).subscribe((response) => {
      response.data.rows.map(item => {
        this.competition.push(item);
      })
      this.competition.map((x) => {
        if (x.name) {
          x.userName = x.name.split("@");
        }
      })
      this.totalPage = response.data.totalPages;
    });
  }
  getCompetition(item) {
    this.searchValue = item;
    this.page = 1;
    this.competition = [];
    this.competitionList();
  }
  onScroll(event) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 10) {
      if (this.page < this.totalPage) {
        this.page = this.page + 1;
        this.competitionList();
      }
    }
  }
  shareCompetition(data) {
    this.service.httpGet(`/v1/feed/post/competition/` + data.compId).subscribe((response) => {
      this.selectCompetition(response.data);
      this.timelineStage = 4
    });
  }
  selectCompetition(item) {
    const dateArray = item.matchDates.map((item) => {
      return moment(item).format('DD-MM-YYYY');
    });
    const unique = dateArray.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })
    item['numberOfDays'] = unique;
    this.selectedCompetition = item;
    this.shareId = item.guid;
    this.linkActive = true;
    this.timelineStage = 4;
  }
  createPost() {
    var content = {
      content: this.shareContent,
      competitionRefernceId: this.shareId,
      url: this.youtubeUrl
    }
    const data = this.commonService.removeEmptyStrings(content);
    this.service.httpPost('/v1/feed/post/create', data).subscribe((response) => {
      this.toastr.success(response.message);
      this.shareId = '';
      this.searchValue = '';
      this.linkActive = false;
      this.page = 1;
      this.competition = [];
      this.selectedCompetition = {};
      this.shareContent = '';
      this.timelineStage = 1;
      this.timeLineData = [];
      this.dataService.toShareCompetition(null, null);
      this.shareFromCompetition = null;
      this.refreshFeed();
    });
  }
  viewProfile() {
    this.router.navigate(['/feed/profile']);
    this.dataService.showFriends(1);
  }
  goToFriends() {
    this.router.navigate(['/feed/profile']);
    this.dataService.showFriends(2);
  }
  goToFollowFriends() {
    this.router.navigate(['/feed/profile']);
    this.dataService.showFriends(4);
  }
  goToCompetition() {
    this.router.navigate(['/competition/landing']);
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
  goToSettings() {
    this.router.navigate(['/feed/profile']);
    this.dataService.showFriends(10)

  }

  toggleSearch() {
    this.thirdSearch = !this.thirdSearch;
    if (this.searchValue != '') {
      this.searchValue = '';
      this.competitionList();
    }
  }
  getUrl(data) {
    if (data == '') {
      this.linkActive = false;
      this.youtubeUrl = '';
    } else {
      this.linkActive = true;
    }
    let link = ''
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    data.replace(urlRegex, function (url) {
      link = url;
    });
    var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (link.match(p)) {
      this.getYoutubeInfo(link);
    } else if (this.shareId == '') {
      this.youtubeUrl = '';
      this.timelineStage = 2;
    } else {
      this.youtubeUrl = '';
    }
  }
  getYoutubeInfo(data) {
    this.service.httpGet(`/v1/feed/post/url/preview?url=` + data).subscribe((response) => {
      this.thumbnailData = response.data.urlData;
      this.youtubeUrl = data;
      if (this.shareId == '') {
        this.timelineStage = 5;
      }
    }, (error) => {
      if (this.shareId == '') {
        this.youtubeUrl = '';
        this.timelineStage = 2;
      } else {
        this.youtubeUrl = '';
      }
    });
  }
  onViewProfile(data) {
    this.router.navigateByUrl('/feed/profile?user=' + data.user.guid)
  }
  goresponsiblegaming()
  {
    if(localStorage.getItem("lang")=== 'en')
    {
      window.open("https://blog.hit-game.com/responsible-gaming/","_blank")
    }
    else{
      window.open("https://blog.hit-game.com/responsible-gaming/portuguese/","_blank")

    }
  }
}
