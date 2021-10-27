import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit {

  constructor(private dataService:DataServiceService) {
    const data = {
      showSearch:false,
      bundleUpload:false,
      title:true,

      buttonTitle:'Link Products',
      titleDetailFirst:'Add Customers',
      titleDetailSecound:'View Customer Details',
      removeButtonAndFileUploadIcon:false,
    }
    this.dataService.sendHeaderDetail(data);
   }


  ngOnInit(): void {
  }

}
