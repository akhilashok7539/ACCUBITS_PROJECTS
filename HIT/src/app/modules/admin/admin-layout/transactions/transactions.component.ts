import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  allTransactions=[];
  searchText='';
  p = 1;
  total = 0;
  limit = 10;
  fromDate='';
  toDate='';
  showFilter=false;
  country ="";
  userId= "";
  constructor(private service: ApiService,
    public toastr:ToastrService,
    public commonService: CommonService ) { }

  ngOnInit(): void {
    this.getTransactionList();
  }

  getTransactionList(){
    let apiParams = {
      searchTerm: this.searchText,
      pageLimit: this.limit,
      pageNo: this.p,
      fromDate: this.fromDate,
      toDate:this.toDate,
      country:this.country,
      userId:this.userId
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/transactions/all?' + params).subscribe((response) => {
      this.allTransactions = response.data.rows;
      this.total = response.data.totalCount;
    },
    (err) => {
        console.log(err.error['message']);
        if(err.error['message'] ==='No transactions available')
        {
          this.allTransactions  = [];
          this.total =0;
        }
        
    });
  }
  downloadCsv(){
    let apiParams = {
      fromDate: this.fromDate,
      toDate:this.toDate
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.downloadProductListCsv(params)
    .subscribe(
      (res: any) => {
        this.downloadFile(res)
        this.toastr.success("File Downloaded successfully");
        sessionStorage.removeItem("checkedProducts");
      },
      (err) => {
        
      }
    );
  }
  downloadFile(data: any) {
    let downloadLink;
    const blob = new Blob([data], { type: "text/csv" });
    downloadLink = document.createElement("a");
    downloadLink.download = "Hit-Transactions.csv";
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }



  paginateGames(e){
    this.p=e;
    this.getTransactionList();
  }

  filterOpen(){
    this.showFilter = !this.showFilter;
  }
  setFilter(data){
    console.log(data);
    this.userId = data.userId;
    this.country = data.country;
    if(this.userId === undefined)
    {
      this.userId = ''
    }
    if(this.country === undefined)
    {
      this.userId = ''
    }
    if(data.start||data.end){
      this.fromDate = data.start;
      this.toDate = data.end;
     
    }else{
      this.fromDate = '';
      this.toDate = '';
    }
    this.p=1;
    this.getTransactionList();
    this.showFilter = !this.showFilter;
  }
  openDetailsNewTab()
  {
    // window.location.href="https://www.xero.com/";
    // window.open("https://www.xero.com/", "_blank")
    this.service.httpGet(`/v1/admin/transactions/xero/sync`).subscribe(
      res=>{
      
        let response;
        response = res.data;
        let url ;
        url = response.url;
        
        
       if(response.url != null)
       {
        window.location.href=url;
       }
       else
       {
        this.toastr.success(res.message) 
       }
      }
    )
  }
}
