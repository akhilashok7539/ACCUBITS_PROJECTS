import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/api.service';
import { environment } from 'src/environments/environment';
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-competition-active-players',
  templateUrl: './competition-active-players.component.html',
  styleUrls: ['./competition-active-players.component.scss']
})
export class CompetitionActivePlayersComponent implements OnInit {
  board_list = [];
  active_user = localStorage.getItem('userName_id');
  @Output() acive_player_value = new EventEmitter();
  @Input() gu_id;
  p = 1;
  total = 0;
  limit = 10;
  envurl = '';
  constructor(
    private service:ApiService,
    private router:Router,
    public commonService: CommonService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.ViewLeaderBoard();
    this.envurl = environment.api_url;
  }
  ViewLeaderBoard() {
    this.board_list = [];
    let apiParams = {
     pageLimit: this.limit,
     pageNo: this.p,
   };
   const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/competition/player/list/' + this.gu_id +'?'+ params ).subscribe((response) => {
      this.total = response.data.totalCount;
      this.board_list = response.data.rows;
      this.acive_player_value.emit(response.data.totalCount)
    });
  }
  paginateGames(e) {
    this.p = e;
    this.ViewLeaderBoard();
  }
  sendFriendRequest(id,i){
    var data = {
      "userId": id
  }
    this.service.httpPost(`/v1/feed/friend/request/send`,data).subscribe((response) => {
      this.toastr.success(response.message);
      this.board_list[i].user.isRequested = 1;
    },
     (error) => { 
       this.toastr.error(error.error.message);
     });
  }
  onClick(data){
    this.router.navigateByUrl('/feed/profile?user=' + data.user.guid)
  }
  sendRequests(i) {
    if(i === 1){
      this.toastr.success('Request Already Send');
    } else {
      this.toastr.success('Already Friend');
    }
  }
}
