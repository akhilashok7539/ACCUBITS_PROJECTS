import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  selectAllcheckbox = false;
  checkPopClosed = false;
  onFilter = 0;
  categoryFilter = [{
    name: 'Appliance',
    status: false
  },
  {
    name: 'None Of Above',
    status: false
  }];

  uomFilter = [{
    name: 'EA',
    status: false
  },
  {
    name: 'None Of Above',
    status: false
  }];
  test_data = [
    { name: 'test', customerName: 'Customer 1', category: 'Appliance', uom: 'buildAct', cost: '1921', checked: false ,status:'Requested',sharedDate:"20 jan 2021"},
    { name: 'test', customerName: 'Customer 1', category: 'Appliance', uom: 'buildAct', cost: '1921', checked: false ,status:'Requested',sharedDate:"20 jan 2021"},
    { name: 'test', customerName: 'Customer 1', category: 'Appliance', uom: 'buildAct', cost: '1921', checked: false ,status:'Requested',sharedDate:"20 jan 2021"},
    { name: 'test', customerName: 'Customer 1', category: 'Appliance', uom: 'buildAct', cost: '1921', checked: false ,status:'Requested',sharedDate:"20 jan 2021"},
    { name: 'test', customerName: 'Customer 1', category: 'Appliance', uom: 'buildAct', cost: '1921', checked: false ,status:'Requested',sharedDate:"20 jan 2021"},
    { name: 'test', customerName: 'Customer 1', category: 'Appliance', uom: 'buildAct', cost: '1921', checked: true,status:'Requested' ,sharedDate:"20 jan 2021"},
  ]
  constructor(
    private dataService:DataServiceService,private router:Router
  ) { 
    const data = {
      showSearch:true,
      bundleUpload:true,
      title:false,
      buttonTitle:'Add Customers',
      titleDetailFirst:'',
      titleDetailSecound:'',
      removeButtonAndFileUploadIcon:false,
    }
    this.dataService.sendHeaderDetail(data);
  }

  ngOnInit(): void {
  }
  onSelectall() {
    this.selectAllcheckbox = !this.selectAllcheckbox;
    this.test_data.forEach((el) => {
      if (this.selectAllcheckbox === true) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    })
  }
  onFilterClick(index) {
    this.onFilter = index;
    this.checkPopClosed = false;
  }

  onCancelFIlter() {
    if (this.checkPopClosed === false) {
      this.checkPopClosed = true
    } else {
      this.onFilter = 0;;
    }
  }

  onFilterApply(filterData) {
    console.log(filterData);
    
  }
  onCustomerClick() {
    this.router.navigateByUrl('/customers/view')
  }
}