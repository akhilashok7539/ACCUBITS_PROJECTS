import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-transaction-history',
  templateUrl: './admin-transaction-history.component.html',
  styleUrls: ['./admin-transaction-history.component.scss']
})
export class AdminTransactionHistoryComponent implements OnInit {
  userTransactionDetails = [];
  userReferenceId='';
  currencyDetails;
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
        this.getUserTransaction();
      }
    });
  }

  getUserTransaction(){
    let apiParams = {
      referenceId:this.userReferenceId,
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/user/transactions?' + params).subscribe((response) => {
      this.currencyDetails = response.data;
      this.userTransactionDetails = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  paginateGames(e) {
    this.p = e;
    this.getUserTransaction();
  }

}
