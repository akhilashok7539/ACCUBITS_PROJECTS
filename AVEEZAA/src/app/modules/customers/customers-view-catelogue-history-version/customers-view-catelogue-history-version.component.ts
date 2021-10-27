import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-customers-view-catelogue-history-version',
  templateUrl: './customers-view-catelogue-history-version.component.html',
  styleUrls: ['./customers-view-catelogue-history-version.component.scss']
})
export class CustomersViewCatelogueHistoryVersionComponent implements OnInit {

  constructor(private dataservice:DataServiceService) {
    this.dataservice.cateLogueHistory().subscribe(
      data =>{
        console.log(data);
        
      },
      error =>{

      }
    )
   }

  ngOnInit(): void {
  }

}
