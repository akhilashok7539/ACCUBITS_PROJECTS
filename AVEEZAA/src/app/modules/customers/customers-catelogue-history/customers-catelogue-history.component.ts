import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '@app/core/services/data-service.service';

@Component({
  selector: 'app-customers-catelogue-history',
  templateUrl: './customers-catelogue-history.component.html',
  styleUrls: ['./customers-catelogue-history.component.scss']
})
export class CustomersCatelogueHistoryComponent implements OnInit {
  test_data = [
    { version: 'test', Date: '22/05/2021'},
    { version: 'test', Date: '22/05/2021'},
    { version: 'test', Date: '22/05/2021'},
    { version: 'test', Date: '22/05/2021'},
    { version: 'test', Date: '22/05/2021'},
    { version: 'test', Date: '22/05/2021'},
  ]
  viewHistoryVersion=false;
  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {
  }
  view(s){
    this.dataservice.storedataService(s);
    this.viewHistoryVersion = true;
  }
}
