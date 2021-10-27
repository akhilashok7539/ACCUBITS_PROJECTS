import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-fund-report',
  templateUrl: './admin-fund-report.component.html',
  styleUrls: ['./admin-fund-report.component.scss']
})
export class AdminFundReportComponent implements OnInit {
  userFundTransactionDetails = [];
  userReferenceId='';
  currencyDetails;
  p = 1;
  total = 0;
  limit = 10;
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

  constructor(private service: ApiService,
    public commonService: CommonService ,
    public route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.user){
        this.userReferenceId = params.user
        this.getUserFundTransaction();
      }
    });
  }

  getUserFundTransaction(){
    let apiParams = {
      userId:this.userReferenceId,
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/user/fundReport?' + params).subscribe((response) => {
      this.currencyDetails = response.data;
      this.userFundTransactionDetails = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  paginateGames(e) {
    this.p = e;
    this.getUserFundTransaction();
  }

}
