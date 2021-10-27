import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {

  constructor(private dataService:DataServiceService) { 
    const data = {
      showSearch:false,
      bundleUpload:false,
      title:true,
      buttonTitle:'Link Products',
      titleDetailFirst:'Products Lists',
      titleDetailSecound:'Add Products List',
      removeButtonAndFileUploadIcon:true,
    }
    this.dataService.sendHeaderDetail(data);
  }

  ngOnInit(): void {
  }

}
