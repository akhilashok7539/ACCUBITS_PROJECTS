import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-create-products-list',
  templateUrl: './create-products-list.component.html',
  styleUrls: ['./create-products-list.component.scss']
})
export class CreateProductsListComponent implements OnInit {
  CreateProductListForm: FormGroup;

  constructor(
    private dataService:DataServiceService,
    private fb: FormBuilder, 
  ) {
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
    this.createProductListForm();
  }
 /**
   * To create login form modal.
   */
  createProductListForm(): void {
    this.CreateProductListForm = this.fb.group({
      productList: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
