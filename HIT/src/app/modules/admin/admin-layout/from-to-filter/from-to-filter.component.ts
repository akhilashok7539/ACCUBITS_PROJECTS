import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import countryList from 'country-telephone-data';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-from-to-filter',
  templateUrl: './from-to-filter.component.html',
  styleUrls: ['./from-to-filter.component.scss']
})
export class FromToFilterComponent implements OnInit {
  @Output() sendFilterData = new EventEmitter;
  @Input() type;
  filterFromDate='';
  filterToDate='';
  country='';
  users = '';
  currencyList: any;
  countryDropDown = false;
  userDropDown = false;
  userlist: any;
  userId;
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.getCountry();
  }
  getCountry(){
    this.commonService._getLocationInfo().subscribe((response) => {
      this.currencyList = response.data.allowedCountries;
    });  
  }
  selectCountry(data){
    this.country = data.countryName;
    this.countryDropDown = false;
  }
  closeCountryDropdown(event): void {
    if (event) {
      if (this.countryDropDown) {
        this.countryDropDown = false;
      }
    }
  }
  
  searchCountryDrop() {
    this.countryDropDown = true;
  }
  searchusers(){
    this.userDropDown = true;
  }
  fromDateChanged(e){
    this.filterFromDate=moment(e.value).format('YYYY-MM-DD');
  }
  toDateChanged(e){
    this.filterToDate=moment(e.value).format('YYYY-MM-DD');
  }
  createFilter(){
    const filterObject={
      start:this.filterFromDate,
      end:this.filterToDate,
      country:this.country,
      userId:this.userId
    }
    this.sendFilterData.emit(filterObject)

  }
  cancelFilter(){
    this.filterFromDate='';
    this.filterToDate='';
    this.country = '';
    this.userId = '';
      const filterObject={
      start:this.filterFromDate,
      end:this.filterToDate,
      country:this.country,
      userId:this.userId
    }
    this.sendFilterData.emit(filterObject)
  }
  closeuserDropdown(event): void {
    if (event) {
      if (this.userDropDown) {
        this.userDropDown = false;
      }
    }
  }
  
  
  changeevent(event){
    console.log(event.target.value);
    let userName = event.target.value;
    this.commonService._getallUsers(userName).subscribe((response) => {
      this.userlist = response.data.users;
    }); 
  }
  selectUsers(data){
    this.users = data.username;
    this.userId = data.guid;
    this.userDropDown = false;
  }
}
