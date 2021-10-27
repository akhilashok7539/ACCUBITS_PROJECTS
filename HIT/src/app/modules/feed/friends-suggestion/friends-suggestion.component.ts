import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-friends-suggestion',
  templateUrl: './friends-suggestion.component.html',
  styleUrls: ['./friends-suggestion.component.scss']
})
export class FriendsSuggestionComponent implements OnInit {
  @Input() suggestionList;
  @Output() requestAction = new EventEmitter<any>();
  constructor(private service:ApiService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  addfriend(item)
  {
    let req = {
      "userId": item.guid
    }
    this.service.httpPost(`/v1/feed/friend/request/send`, req).subscribe((response) => {
      this.toastr.success(response.message);
      // this.getUser(this.userIdParams)
    })
  }
  onViewProfile(data) {
    this.router.navigate(['/feed/profile'], { queryParams: { user: data.user.guid,view:'4' } });
  }

}
