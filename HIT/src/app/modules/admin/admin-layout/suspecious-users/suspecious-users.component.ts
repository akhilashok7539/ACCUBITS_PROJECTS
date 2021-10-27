import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-suspecious-users',
  templateUrl: './suspecious-users.component.html',
  styleUrls: ['./suspecious-users.component.scss']
})
export class SuspeciousUsersComponent implements OnInit {
  allUsers=[];
  p = 1;
  total = 0;
  limit = 10;
  constructor(private service: ApiService,
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/user/suspicious?' + params).subscribe((response) => {
      this.allUsers = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  paginateGames(e) {
    this.p = e;
    this.getUsers();
  }

}
