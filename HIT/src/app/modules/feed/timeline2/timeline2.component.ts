import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../../core/service/api.service';
import { DataServiceService } from '../../../shared/service/data-service.service';
import { CommonService } from '../../../core/service/common.service';

@Component({
  selector: 'app-timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['./timeline2.component.scss']
})
export class Timeline2Component implements OnInit ,OnDestroy {
  @Input() timelineData;
  @Input() index;
  @Output() reload = new EventEmitter<any>();
  @Output() deleteFeed = new EventEmitter<any>();
  @Output() addCommentCount = new EventEmitter<any>();
  @Output() updateCommentCount = new EventEmitter<any>();
  envurl = '';
  shareContent = '';
  replyContent = '';
  betting_popup = false;
  showComment = false;
  addCommentClick = false;
  show_post = false;
  showReplyButton = false;
  replyShow = false;
  showOption = false;
  userProfile;
  total = 0;
  limit = 10;
  page = 1;
  totalPage = 0;
  listComment = [];
  postType='';
  subscribeProfile: Subscription;
  constructor(private service: ApiService,
    private dataService: DataServiceService,
    public commonService: CommonService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if (data) {
        this.userProfile = data;
      }
    });
    this.envurl = environment.api_url;
    this.postType = this.timelineData.feedType;
  }
  ngOnDestroy(){
    this.subscribeProfile.unsubscribe();
  }
  likePost(data, index) {
    let react = 0;
    if (data.isLiked == 0) {
      react = 1;
    } else {
      react = 0;
    }
    const apidata = {
      referenceId: data.guid,
      reaction: react
    }
    this.service.httpPost('/v1/feed/post/like', apidata).subscribe((response) => {
      const dataToEmit = {
        i: index,
        reaction: react
      }
      this.reload.emit(dataToEmit);
    });
  }
  toggleComment(data) {
    if (this.addCommentClick) {
      return;
    }
    this.showComment = true;
    this.addCommentClick = true;
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.page,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/feed/post/comments/view/' + data.guid + '?' + params).subscribe((response) => {
      response.data.rows.map(item => {
        this.listComment.push(item);
      })
      this.total = response.data.totalCount;
      this.totalPage = response.data.totalPages;
      let upData = {
        count: this.total,
        index: this.index
      }
      this.updateCommentCount.emit(upData);
    });

  }
  onScroll(event, data) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 20) {
      if (this.page < this.totalPage) {
        this.page = this.page + 1;
        this.addCommentClick = false;
        this.toggleComment(data);
      }
    }
  }
  closeComment() {
    this.shareContent = '';
    this.showComment = false;
    this.listComment = [];
    this.page = 1;
    this.addCommentClick = false;
  }

  addComment(data, index) {
    const apiData = {
      referenceId: data.guid,
      comment: this.shareContent
    }
    this.service.httpPost('/v1/feed/post/add/comment', apiData).subscribe((response) => {
      this.shareContent = '';
      this.listComment = [];
      this.show_post = false;
      this.addCommentClick = false;
      this.page = 1;
      this.toggleComment(data);
    });
    this.addCommentCount.emit(index);
  }
  onChange() {
    if (/\S/.test(this.shareContent)) {
      this.show_post = true;
    } else {
      this.show_post = false;
    }
  }
  showReply(i) {
    if (this.listComment[i].showReply) {
      this.listComment[i]['showReply'] = false;
    } else {
      this.listComment[i]['showReply'] = true;
    }
  }
  addReply(i) {
    if (this.listComment[i].addReply) {
      this.listComment[i]['addReply'] = false;
    } else {
      this.listComment[i]['addReply'] = true;
    }
  }
  addCommentLike(item, index) {
    let react = 0;
    if (item.isLiked == 0) {
      react = 1;
    } else {
      react = 0;
    }
    const apidata = {
      commentId: item.id,
      reaction: react
    }
    this.service.httpPost('/v1/feed/post/comment/like', apidata).subscribe((response) => {
      this.listComment[index].isLiked = react;
      if (react == 0) {
        this.listComment[index].totalLike = this.listComment[index].totalLike - 1
      } else {
        this.listComment[index].totalLike = this.listComment[index].totalLike + 1
      }

    });
  }

  addReplyContent(data, id, index) {
    const apiData = {
      referenceId: data.guid,
      comment: this.replyContent,
      commentId: id
    }
    this.service.httpPost('/v1/feed/post/add/comment', apiData).subscribe((response) => {
      // const replyTocomments= this.listComment[index].reply;
      const newReplyObject = {
        text: this.replyContent,
        createdAt: new Date(),
        id: response.data.commentId,
        isLiked: 0,
        totalLike: 0,
        user: {
          username: this.userProfile.username,
          image: this.userProfile.image
        }
      }
      this.listComment[index]['reply'] = [newReplyObject, ...this.listComment[index]['reply']];
      this.listComment[index]['reply'] = this.listComment[index]['reply'];
      this.listComment[index]['addReply'] = false;
      this.replyContent = '';
    });
  }
  addReplyLike(item, Commentindex, replyIndex) {
    let react = 0;
    if (item.isLiked == 0) {
      react = 1;
      this.listComment[Commentindex]['reply'][replyIndex].isLiked = 1;
      this.listComment[Commentindex]['reply'][replyIndex].totalLike = this.listComment[Commentindex]['reply'][replyIndex].totalLike + 1
    } else {
      react = 0;
      this.listComment[Commentindex]['reply'][replyIndex].isLiked = 0;
      this.listComment[Commentindex]['reply'][replyIndex].totalLike = this.listComment[Commentindex]['reply'][replyIndex].totalLike - 1
    }
    const apidata = {
      commentId: item.id,
      reaction: react
    }
    this.service.httpPost('/v1/feed/post/comment/like', apidata).subscribe((response) => {
    });
  }
  onChangeReply() {
    if (/\S/.test(this.replyContent)) {
      this.showReplyButton = true;
    } else {
      this.showReplyButton = false;
    }
  }

  showPostOptions(){
    this.showOption = !this.showOption;
  }
  closeTypeDropdown(event): void {
    if (event) {
      if (this.showOption) {
        this.showOption = false;
      }
    }
  }
  deletePost(data,index){
    this.service.httpDelete('/v1/feed/post?referenceId='+data.guid).subscribe((response) => {
      this.deleteFeed.emit(index);
    });
  }

}
