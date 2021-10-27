import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-competition-club-card',
  templateUrl: './competition-club-card.component.html',
  styleUrls: ['./competition-club-card.component.scss']
})
export class CompetitionClubCardComponent implements OnInit {
  @Output() onOptionSelect = new EventEmitter();
  @Input() competition_detail;
  envurl = '';
  request = true;
  username = localStorage.getItem('userName');
  constructor(private service: ApiService,
    public router: Router,
    public dataService: DataServiceService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.envurl = environment.api_url;
  }
  getUser(){
  if(this.competition_detail !== undefined){
    if (this.username == this.competition_detail.user.username) {
       return false;
    } else {
      return true;
    }
    }else {
      return true;
    }
  }
  onSelectOption(data) {
    this.onOptionSelect.emit(data);
  }
  formatDate(date) {
    date = new Date(date)
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}`
  }
  sendFriendRequest(id) {
    var data = {
      userId: id
    }
    this.service.httpPost(`/v1/feed/friend/request/send`, data).subscribe((response) => {
      this.toastr.success(response.message);
      this.competition_detail.user.isRequested = 1;
    });
  }
  viewProfile(user) {
    this.router.navigate(['/feed/profile'], { queryParams: { user: user.guid } });
    this.dataService.toProfilePage(this.route.snapshot.paramMap.get("id"), '/competition/details/');
  }
  onMessage(item){
    const data = item;
    data.friendInfo = item;
    this.dataService.sendFriendMessage(data);
}
}