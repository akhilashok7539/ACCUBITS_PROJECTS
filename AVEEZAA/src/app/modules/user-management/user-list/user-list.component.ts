import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
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
    { name: 'test', code: '1234', category: 'Appliance', uom: 'EA', cost: '1921', checked: false },
    { name: 'test', code: '1234', category: 'Appliance', uom: 'EA', cost: '1921', checked: false },
    { name: 'test', code: '1234', category: 'Appliance', uom: 'EA', cost: '1921', checked: false },
    { name: 'test', code: '1234', category: 'Appliance', uom: 'EA', cost: '1921', checked: false },
    { name: 'test', code: '1234', category: 'Appliance', uom: 'EA', cost: '1921', checked: false },
    { name: 'test', code: '1234', category: 'Appliance', uom: 'EA', cost: '1921', checked: false },
  ]
  constructor(
    private dataService:DataServiceService,
  ) { 
    const data = {
      showSearch:true,
      bundleUpload:true,
      title:false,
      buttonTitle:'Add Users',
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
}
