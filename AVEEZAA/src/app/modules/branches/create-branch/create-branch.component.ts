import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.scss']
})
export class CreateBranchComponent implements OnInit {

  constructor(private dataService:DataServiceService) { 
    const data = {
      showSearch:false,
      bundleUpload:false,
      title:true,
      buttonTitle:'Link Products',
      titleDetailFirst:'Branch Lists',
      titleDetailSecound:'Add Branch',
      removeButtonAndFileUploadIcon:true,
    }
    this.dataService.sendHeaderDetail(data);
  }

  ngOnInit(): void {
  }

}
