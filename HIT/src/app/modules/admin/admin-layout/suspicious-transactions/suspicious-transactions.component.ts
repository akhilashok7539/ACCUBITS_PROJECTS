import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';

@Component({
  selector: 'app-suspicious-transactions',
  templateUrl: './suspicious-transactions.component.html',
  styleUrls: ['./suspicious-transactions.component.scss']
})
export class SuspiciousTransactionsComponent implements OnInit {
  allTransactions=[];
  p = 1;
  total = 0;
  limit = 10;
  constructor(private service: ApiService,
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.getTransactionList();
  }
  getTransactionList(){
    let apiParams = {
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/transactions/suspicious?' + params).subscribe((response) => {
      this.allTransactions = response.data.rows;
      this.total = response.data.totalCount;
    });
  }

  paginateGames(e) {
    this.p = e;
    this.getTransactionList();
  }

}
