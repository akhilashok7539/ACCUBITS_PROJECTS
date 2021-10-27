import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-user-activity',
  templateUrl: './admin-user-activity.component.html',
  styleUrls: ['./admin-user-activity.component.scss']
})
export class AdminUserActivityComponent implements OnInit {
  userActivityDetails = [];
  userReferenceId=''
  p = 1;
  total = 0;
  limit = 10;

  constructor(private service: ApiService,
    public commonService: CommonService ,
    public route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.user){
        this.userReferenceId = params.user
        this.getUserActivity();
      }
    });
  }

  getUserActivity(){
    let apiParams = {
      referenceId:this.userReferenceId,
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/user//userActivity?' + params).subscribe((response) => {
      this.userActivityDetails = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  paginateGames(e) {
    this.p = e;
    this.getUserActivity();
  }

}
