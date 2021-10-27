import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../core/services/data-service.service';

@Component({
  selector: 'app-all-products-view',
  templateUrl: './all-products-view.component.html',
  styleUrls: ['./all-products-view.component.scss']
})
export class AllProductsViewComponent implements OnInit {
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
      showSearch:false,
      bundleUpload:false,
      title:true,
      buttonTitle:'Link Products',
      titleDetailFirst:'Products Lists',
      titleDetailSecound:'PL1',
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
  }

}
