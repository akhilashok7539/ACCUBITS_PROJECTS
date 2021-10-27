import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';
import { from } from 'rxjs';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.scss']
})
export class AllFriendsComponent implements OnInit {
  @Input() allFriendsList;
  @Output() requestAction = new EventEmitter<any>();
  @Output() seeAllAction = new EventEmitter<any>();
  constructor(private service: ApiService,
    private router: Router,
    private dataServiceService: DataServiceService,
    public route: ActivatedRoute,
    private toastr: ToastrService) { }
  show = true;
  ownProfile = true;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params?.user) {
        this.ownProfile = false;
      }else{
        this.ownProfile = true;
        this.requestAction.emit();
      }
    });
  }
  blockFriends(item) {
    const apiData = {
      userId: item.friendInfo.guid,
    }
    this.service.httpPost(`/v1/feed/friend/block`, apiData).subscribe((response) => {
      this.toastr.success(response.message);
      this.requestAction.emit();
    });
  }
  onSelect(data) {
    this.show = false;
    this.seeAllAction.emit();
  }
  onMessage(item) {
    this.dataServiceService.sendFriendMessage(item);
  }
  onViewProfile(data) {
    this.router.navigate(['/feed/profile'], { queryParams: { user: data.friendInfo.guid, view: '2' } });
  }
  sendFriendRequest(id, i) {
    var data = {
      "userId": id
    }
    this.service.httpPost(`/v1/feed/friend/request/send`, data).subscribe((response) => {
      this.toastr.success(response.message);
      this.allFriendsList.rows[i].friendInfo.isRequested = 1;
    },
      (error) => {
        this.toastr.error(error.error.message);
      });
  }
}
