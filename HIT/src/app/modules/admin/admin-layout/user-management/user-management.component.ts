import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import currency from '../../../../../assets/json/currencies.json';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  userDetails = [];
  searchText='';
  userFilterType='';
  select_index = null;
  submit = false;
  phone_num;
  currencyDropDown = false;
  filterText;
  p = 1;
  total = 0;
  limit = 10;
  userFilter=[
    {"status":'',"name":"All"},
    {"status":'1',"name":"Active User"},
    {"status":'0',"name":"Inactive"},
    {"status":'3',"name":"Suspended"},
    {"status":'2',"name":"Blocked User"},
    {"status":'4',"name":"Frequent Winner"},
    {"status":'5',"name":"Frequent Loser"}
  ]
  public currencyList = currency;
  constructor(private service: ApiService,
    private dataService:DataServiceService,
    public commonService: CommonService ,
    private toastr: ToastrService, 
    private router:Router ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    let apiParams = {
      searchTerm: this.searchText,
      status: this.userFilterType,
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/users?' + params).subscribe((response) => {
      this.userDetails = response.data.rows;
      this.total = response.data.totalCount;
    });
  }
  getData(e){
    this.searchText = e;
    this.p = 1;
    this.getUser();
  }
  filterUser(i){
    this.userFilterType =i;
    this.p = 1;
    this.getUser();
  }
  paginateGames(e) {
    this.p = e;
    this.getUser();
  }
  onSelectEdit(i,data){
    // this.select_index = i;
    this.phone_num = data.mobileNumber;
    this.submit = true;
    if(i === this.select_index){
      this.select_index = null;
    } else {
      this.select_index = i;
    }
  }
  onSelectSubmit(i,data){
    this.submit = false;
    if(i === this.select_index){
      this.select_index = null;
    } else {
      this.select_index = i;
    }
    const datas = {
      'userId': data.guid,
      'mobileNumber': data.mobileNumber
    }
    this.service.httpPut(`/v1/admin/user/edit`,datas).subscribe((response) => {
      this.toastr.success(response['message']); 
      // this.router.navigateByUrl('/competition/betting/' + this.competition_detail.guid)
    });
  }
  onSelectCancel(i,data){
    this.submit = false;
    if(i === this.select_index){
      this.select_index = null;
    } else {
      this.select_index = i;
    }
    this.userDetails[i].mobileNumber = this.phone_num;
  }
  selectCurrency(c) {
    this.filterText = c;
    this.currencyDropDown = false;
  }
  searchCurrencyDrop() {
    this.currencyDropDown = true;
  }
  closeCurrencyDropdown(event): void {
    if (event) {
      if (this.currencyDropDown) {
        this.currencyDropDown = false;
      }
    }
  }
  onSelectUser(data){
    this.router.navigateByUrl('/admin/layout/user-management/detail?user='+ data.guid)
  }
}
