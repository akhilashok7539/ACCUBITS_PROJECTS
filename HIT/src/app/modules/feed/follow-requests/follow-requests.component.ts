import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-follow-requests',
  templateUrl: './follow-requests.component.html',
  styleUrls: ['./follow-requests.component.scss']
})
export class FollowRequestsComponent implements OnInit {
  @Input() followFriendsList;
  @Output() requestAction = new EventEmitter<any>();
  constructor(private service:ApiService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  followAction(action,item){
    const apiData={
      userId : item.user.guid,
      status : action
    }
    this.service.httpPost(`/v1/feed/friend/request/change`,apiData).subscribe((response) => {
      this.toastr.success(response.message);
      this.requestAction.emit();
    });
  }
  onViewProfile(data) {
    this.router.navigate(['/feed/profile'], { queryParams: { user: data.user.guid,view:'4' } });
  }

}
