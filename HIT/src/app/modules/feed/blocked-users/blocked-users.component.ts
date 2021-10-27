import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-blocked-users',
  templateUrl: './blocked-users.component.html',
  styleUrls: ['./blocked-users.component.scss']
})
export class BlockedUsersComponent implements OnInit {
  @Input() blockedUserList;
  @Output() requestAction = new EventEmitter<any>();
  constructor(private service:ApiService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  unBlockFriends(item){
    const apiData={
      userId : item.friendInfo.guid,
    }
    this.service.httpPost(`/v1/feed/friend/unblock`,apiData).subscribe((response) => {
      this.toastr.success(response.message);
      this.requestAction.emit();
    });
  }

}
